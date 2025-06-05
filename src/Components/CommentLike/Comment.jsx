import React, { useEffect, useState } from "react";
import { getTimeAgo } from "../../hooks/useTimeAgo";

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `http://localhost:1337/api/comments?filters[post][id][$eq]=${postId}&populate=*`
        );
        if (!res.ok) throw new Error("Failed to fetch comments");
        const data = await res.json();
        setComments(data?.data || []);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Error loading comments: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    if (postId) fetchComments();
  }, [postId]);

  return (
    <div className="p-4 bg-white rounded-md shadow-md w-full max-w-2xl mx-auto mt-6">
      {loading ? (
        <p className="text-gray-500 text-sm">Loading comments...</p>
      ) : error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : comments.length > 0 ? (
        <>
          {comments.map((comment, index) => {
            const FirstName = comment?.users_permissions_user?.FirstName;
            const LastName = comment?.users_permissions_user?.LastName;
            const Proffesion = comment?.users_permissions_user?.proffesion;
            const commentContent = comment?.comment?.[0]?.children?.[0]?.text || "No text";
            const createdAt = comment?.createdAt;
            const createdTimeAgo = getTimeAgo(createdAt);

            return (
              <div
                key={index}
                className="mb-4 p-4 bg-white shadow-sm border border-gray-200 rounded-xl"
              >
                <div className="mb-1">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {FirstName} {LastName}
                  </h4>
                  <p className="text-xs text-gray-500">{Proffesion}</p>
                </div>

                <p className="text-sm text-gray-800 mt-1">{commentContent}</p>

                <div className="mt-2 flex gap-4 text-xs text-blue-600 cursor-pointer">
                  <span className="hover:underline">Like</span>
                  {/* <span className="hover:underline">Reply</span> */}
                  <span>{createdTimeAgo}</span>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p className="text-gray-500 text-sm">No comments found for this post.</p>
      )}
    </div>
  );
};

export default Comment;
