import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Sparkles } from "lucide-react";
import useFetchPost from "../../hooks/useFetchPosts";
import AddComment from "../CommentLike/AddComment";
import { addPostInfo } from "../../store/postSlice";
import { useDispatch } from "react-redux";

const PostContainer = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const allPosts = useFetchPost(); 
  useEffect(() => {
    if (allPosts?.data && Array.isArray(allPosts?.data)) {
      // console.log(allPosts?.data)
      setPosts(allPosts?.data);
      }
      }, [allPosts]);
      
      dispatch(addPostInfo(posts))
  return (
    <div className="w-full flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-2">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 flex items-center justify-between border-b pb-3 mb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="text-blue-500 w-5 h-5" />
          <h2 className="text-lg font-semibold text-gray-700">Latest Posts</h2>
        </div>
        {posts.length > 0 && (
          <span className="text-sm text-gray-500">
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </span>
        )}
      </div>

      {/* Post Feed */}
      {posts.length > 0 ? (
        posts.map((post) => (
          
          <PostCard
            key={post?.id}
            name={`${post?.users_permissions_user?.FirstName || ""} ${
              post?.users_permissions_user?.LastName || ""
            }`}
            profession={post?.users_permissions_user?.Proffesion || "Unknown"}
            content={post?.Content || ""}
            likes={post?.likes || 0}
            comments={post?.Comments?.length || 0}
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
