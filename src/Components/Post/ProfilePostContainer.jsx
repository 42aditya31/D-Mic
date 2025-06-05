import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import useUserPost from "../../hooks/useUsersPost";
import { useSelector } from "react-redux";
import { Sparkles } from "lucide-react";
import AddPost from "./AddPost";

const ProfilePostContainer = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((store) => store.user.user);
  const userPost = useUserPost(user?.id);
  useEffect(() => {
    if (userPost?.data && Array.isArray(userPost.data)) {
      setPosts([...userPost.data].reverse());
    }
  }, [userPost?.data]);
  

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b pb-2 mb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="text-blue-500 w-5 h-5" />
          <h2 className="text-lg font-semibold text-gray-700">Your Posts</h2>
        </div>
        {posts?.length > 0 && (
          <span className="text-sm text-gray-500">
            Total: {posts.length} {posts.length === 1 ? "post" : "posts"}
          </span>
        )}

        <AddPost name="New Post" />
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] pr-2">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              postId={post.id}
              name={`${post?.users_permissions_user?.FirstName || ""} ${
                post?.users_permissions_user?.LastName || ""
              }`}
              profession={post?.users_permissions_user?.Proffesion || "Unknown"}
              content={post?.Content}
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
              Start sharing your thoughts, ideas, or updates here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePostContainer;
