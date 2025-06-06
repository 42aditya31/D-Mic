import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Sparkles, StarHalf, StarIcon, Stars, WandSparklesIcon } from "lucide-react";
import useFetchPost from "../../hooks/useFetchPosts";
import { addPostInfo } from "../../store/postSlice";
import { useDispatch } from "react-redux";

const PostContainer = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const allPosts = useFetchPost();

  useEffect(() => {
    if (allPosts?.data && Array.isArray(allPosts.data)) {
      const reversedPosts = [...allPosts.data].reverse(); // Newest first
      setPosts(reversedPosts);
      dispatch(addPostInfo(reversedPosts));
    }
  }, [allPosts]);

  return (
    <div className="w-full -mt-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-2">
      <div className="sticky top-0 bg-white z-10 flex items-center justify-between border-b pb-3 mb-2">
        <div className="flex items-center gap-2">
          <Stars className="text-blue-500 w-5 h-5" />
          <h2 className="text-lg font-semibold text-gray-700">Latest Posts</h2>
        </div>
        {posts.length > 0 && (
          <span className="text-sm text-gray-500">
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </span>
        )}
      </div>

      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            postId={post.id}
            name={`${post?.users_permissions_user?.FirstName || ""} ${
              post?.users_permissions_user?.LastName || ""
            }`}
            profession={post?.users_permissions_user?.Proffesion || "Unknown"}
            content={post?.Content || ""}
            likes={post?.likes?.[0]?.LikeCount || 0}
            likeId={post?.likes?.[0]?.id || null}
            comments={post?.Comments?.length || 0}
            publishedAt={post?.publishedAt}
          />
        ))
      ) : (
        <div className="text-center mt-10 text-gray-500">
          <p className="text-lg font-medium">No posts yet!</p>
          <p className="text-sm mt-1">
            Start sharing your thoughts with the community.
          </p>
        </div>
      )}
    </div>
  );
};

export default PostContainer;
