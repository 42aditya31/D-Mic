import React from "react";
import { MessageCircle, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";

const PostCard = ({
  name,
  profession,
  content,
  likes = 0,
  comments = 0,
}) => {
  return (
    <div className="w-full max-w-2xl bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-start space-x-4">
        {/* Profile Picture Placeholder */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />

        {/* Main Content */}
        <div className="flex-1">
          {/* Name & Profession */}
          <div className="mb-1">
            <h3 className="text-base font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{profession}</p>
          </div>

          {/* Post Content */}
          <div className="text-sm text-gray-800 mt-2 whitespace-pre-line leading-relaxed">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-start space-x-6 mt-4 text-gray-600 text-sm border-t pt-3">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition">
              <Heart size={18} /> <span>{likes}</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 transition">
              <MessageCircle size={18} /> <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
