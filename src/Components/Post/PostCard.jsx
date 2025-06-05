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
  likes = 0,
}) => {
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);
  const dispatch = useDispatch();

  const handleToggleCommentSection = () => {
    setIsCommentSectionVisible((prev) => !prev);
    dispatch(addPostId(postId));
  };

  const timeAgo = useTimeAgo(publishedAt)

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200">
      <div className="flex items-start gap-4">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />

        {/* Post Content */}
        <div className="flex-1">
          {/* User Info */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">{name}</h3>
              <span className="text-xs text-gray-400">{timeAgo}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{profession}</p>
          </div>

          {/* Markdown Content */}
          <div className="text-sm text-gray-800 whitespace-pre-line leading-relaxed mb-4">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {/* Actions: Likes & Comments */}
          <div className="flex gap-6 text-gray-600 text-sm border-t border-gray-200 pt-3">
            <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition">
              <Heart size={18} /> <span>{likes}</span>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition"
              onClick={handleToggleCommentSection}
            >
              <MessageCircle size={18} /> <span>Comments</span>
            </div>
          </div>

          {/* Comment Section */}
          {isCommentSectionVisible && (
            <div className="mt-4">
              <CommentSection />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
