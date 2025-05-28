// ProfilePostContainer.jsx
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import useUserPost from "../../hooks/useUsersPost";
import { useSelector } from "react-redux";

const ProfilePostContainer = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((store) => store.user.userInfo);
  const userPost = useUserPost(user?.id);

  useEffect(() => {
    if (userPost?.data) {
      setPosts(userPost.data);
    }
  }, [userPost?.data]);

  return (
    <div className="flex  overflow-y-scroll max-h-[80vh] flex-col items-center space-y-4">
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
        <p className="text-gray-500 mt-4">No posts available.</p>
      )}
    </div>
  );
};

export default ProfilePostContainer;
