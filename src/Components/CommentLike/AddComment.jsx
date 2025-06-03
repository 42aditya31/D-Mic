import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddComment = ({  onCommentPosted }) => {
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const userId = useSelector((store) => store.user.user);
  const postId = useSelector((store)=>store.post.post)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    const payload = {
      data: {
        comment: [
          {
            type: "paragraph",
            children: [{ type: "text", text: commentText }],
          },
        ],
        users_permissions_user: userId.toString(),
        post: postId.toString(),
      },
    };

    try {
      setLoading(true);
      setError("");

      const response = await fetch("http://localhost:1337/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err?.error?.message || "Failed to post comment");
      }

      setCommentText("");
      if (onCommentPosted) onCommentPosted();
    } catch (err) {
      setError("Failed to post comment. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 border rounded-lg p-3 shadow-sm bg-white"
    >
      <textarea
        rows="3"
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <div className="flex justify-end mt-2">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </div>
    </form>
  );
};

export default AddComment;
