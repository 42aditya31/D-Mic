import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Sparkles } from "lucide-react";

const dummyPosts = [
  {
    id: 1,
    name: "Aditya Sharma",
    profession: "Full Stack Developer",
    content: "This is a **markdown** enabled post with an image below.",
    imageUrl: "https://via.placeholder.com/600x300",
    likes: 10,
    comments: 4,
  },
  {
    id: 2,
    name: "Jane Doe",
    profession: "UI/UX Designer",
    content: "Design is how it works. \n\n> - Steve Jobs",
    imageUrl: "",
    likes: 5,
    comments: 2,
  },
  {
    id: 3,
    name: "John Smith",
    profession: "Backend Engineer",
    content: "Working on a new API.\n\n```js\nconsole.log('Hello Backend!');\n```",
    imageUrl: "https://via.placeholder.com/600x350",
    likes: 18,
    comments: 6,
  },
  // Add more dummy posts if needed
];

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosts(dummyPosts);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-h-[70vh] overflow-y-auto pr-2 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3 mb-2">
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
            key={post.id}
            name={post.name}
            profession={post.profession}
            content={post.content}
            imageUrl={post.imageUrl}
            likes={post.likes}
            comments={post.comments}
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
