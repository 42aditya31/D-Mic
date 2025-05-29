// PostCard.jsx
import React from "react";
import { MessageCircle, Heart } from "lucide-react";
import ReactMarkdown from 'react-markdown';


const PostCard = ({
  name,
  profession,
  content,
  imageUrl = "",
  likes = 0,
  comments = 0,
}) => {
  return (
    <div className="w-full max-w-2xl  bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-start space-x-4">
        {/* Profile Icon Placeholder */}
        <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>

        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-center mb-1">
            <div>
              <h3 className="text-base font-semibold text-gray-900">{name}</h3>
              <p className="text-xs text-gray-500">{profession}</p>
            </div>
          </div>

          {/* Content */}
          <p className="text-sm text-gray-800 mb-2 whitespace-pre-line"> <ReactMarkdown>{content}</ReactMarkdown></p>

          {/* Optional Image */}
          {imageUrl && (
            <div className="mt-2">
              <img
                src={imageUrl}
                alt="Post"
                className="rounded-xl max-h-80 w-full object-cover"
              />
            </div>
          )}

          {/* Footer */}
          <div className="flex space-x-6 mt-3 text-gray-600 text-sm">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-red-500">
              <Heart size={16} /> <span>{likes}</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
              <MessageCircle size={16} /> <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
