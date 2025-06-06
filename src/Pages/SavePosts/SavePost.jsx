// pages/SavePost.jsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearAllSavedPosts } from "../../store/saveSlice";
import PostCard from "../../Components/Post/PostCard";
import { BookmarkX, Loader, ClipboardList } from "lucide-react";

const SavePost = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  const [savedPostIds, setSavedPostIds] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load saved post IDs from localStorage
  useEffect(() => {
    if (userId) {
      const stored = localStorage.getItem(`savedPosts_${userId}`);
      const parsed = stored ? JSON.parse(stored) : [];
      setSavedPostIds(parsed);
    }
  }, [userId]);

  const fetchData = async () => {
    if (!savedPostIds || savedPostIds.length === 0) {
      setPosts([]);
      return;
    }

    const query = savedPostIds.map(id => `filters[id][$in]=${id}`).join("&");
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:1337/api/posts?${query}&populate=*`);
      const json = await res.json();
      setPosts(json.data || []);
    } catch (err) {
      console.error("Failed to fetch saved posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClearAll = () => {
    dispatch(clearAllSavedPosts());
    setSavedPostIds([]);
    setPosts([]);
  };

  useEffect(() => {
    fetchData();
  }, [savedPostIds]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-gray-800">
          <ClipboardList className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Saved Posts</h2>
        </div>

        {savedPostIds.length > 0 && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-2 cursor-pointer bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition duration-200 text-sm font-semibold"
          >
            <BookmarkX className="w-5 h-5" />
            Ctrl + Alt + BYE
          </button>
        )}
      </div>

      {loading ? (
        <div className="text-gray-500 text-center py-8 flex flex-col items-center gap-2">
          <Loader className="w-6 h-6 animate-spin" />
          <p>Loading saved posts...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          <p className="text-lg font-medium">No saved posts yet.</p>
          <p className="text-sm mt-2">Start saving posts to see them listed here.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              postId={post.id}
              name={`${post?.users_permissions_user?.FirstName || ""} ${post?.users_permissions_user?.LastName || ""}`}
              profession={post?.users_permissions_user?.Proffesion || "Unknown"}
              content={post?.Content || ""}
              likes={post?.likes?.[0]?.LikeCount || 0}
              likeId={post?.likes?.[0]?.id || null}
              comments={post?.Comments?.length || 0}
              publishedAt={post?.publishedAt}
              // currentPostUserId={post?.users_permissions_user?.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavePost;
