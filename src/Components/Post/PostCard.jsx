import React, { useState } from "react";
import { MessageCircle, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import AddComment from "../CommentLike/AddComment";
import CommentSection from "../CommentLike/CommentSection";
import { useDispatch } from "react-redux";
import { addPostId } from "../../store/postSlice";
import useTimeAgo from "../../hooks/useTimeAgo";

const PostCard = ({
  name,
  profession,
  content,
  publishedAt,
  postId,
  comments,
  likes,
  likeId,
}) => {
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);
  const [likeCount, setLikeCount] = useState(likes || 0);
  const dispatch = useDispatch();

  const timeAgo = useTimeAgo(publishedAt);

  const handleToggleCommentSection = () => {
    setIsCommentSectionVisible((prev) => !prev);
    dispatch(addPostId(postId));
  };

  const handleLikeClick = async () => {
    const url = likeId
      ? `http://localhost:1337/api/likes/${likeId}`
      : "http://localhost:1337/api/likes";
  
    const method = likeId ? "PUT" : "POST";
    const payload = {
      data: likeId
        ? { LikeCount: likeCount + 1 }
        : { LikeCount: 1, post: postId },
    };
  
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) throw new Error("Failed to process like request");
  
      setLikeCount((prev) => (likeId ? prev + 1 : 1));
    } catch (err) {
      console.error("Like error:", err.message);
    }
  };
  

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">{name}</h3>
              <span className="text-xs text-gray-400">{timeAgo}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{profession}</p>
          </div>

          <div className="text-sm text-gray-800 whitespace-pre-line leading-relaxed mb-4">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          <div className="flex gap-6 text-gray-600 text-sm border-t border-gray-200 pt-3">
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition"
              onClick={handleLikeClick}
            >
              <Heart size={18} /> <span>{likeCount}</span>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition"
              onClick={handleToggleCommentSection}
            >
              <MessageCircle size={18} /> <span>{comments}</span>
            </div>
          </div>

          {isCommentSectionVisible && (
            <div className="mt-4">
              <CommentSection />
              {/* <AddComment onCommentPosted={() => {}} /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
