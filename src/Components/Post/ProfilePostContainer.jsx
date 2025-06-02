import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import useUserPost from "../../hooks/useUsersPost";
import { useSelector } from "react-redux";
import { Sparkles } from "lucide-react"; // optional icon (Lucide)
import AddPost from "./AddPost";

const ProfilePostContainer = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((store) => store.user.user);
  const userPost = useUserPost(user?.id);

  useEffect(() => {
    if (userPost?.data) {
      setPosts(userPost.data);
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
        {/* Optional: Uncomment to add a "New Post" button */}
        <AddPost name="New Post"/>
       
      </div>

      
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] pr-2">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              name={`${post?.users_permissions_user?.FirstName || ""} ${
                post?.users_permissions_user?.LastName || ""
              }`}
              profession={post?.users_permissions_user?.Proffesion}
              content={post.content}
              imageUrl={post.imageUrl || ""}
              likes={post.likes}
              comments={post.Comments?.length || 0}
            />
          ))
        ) : (
          <div className="text-center mt-10 text-gray-500">
            <p className="text-lg font-medium">No posts yet!</p>
            <p className="text-sm mt-1">
              Start sharing your thoughts, ideas, or updates here.
            </p>
            {/* Optional CTA */}
            {/* <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Create Your First Post
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePostContainer;
