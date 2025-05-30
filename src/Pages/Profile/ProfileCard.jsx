// ProfileCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const ProfileCard = ({ firstName, lastName, profession, email, url }) => {
  return (
    <div className="w-full  bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
      {/* Cover Banner */}
      <div className="h-[90px] bg-gray-800"></div>

      {/* Profile Image */}
      <div className="flex justify-center -mt-10">
        <div className="w-[84px] h-[84px] rounded-full border-4 border-white overflow-hidden bg-white shadow-md">
          {url ? (
            <img
              src={"http://localhost:1337/admin" + url}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-3xl bg-gray-100">
              <FaUserAlt />
            </div>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="pt-4 pb-6 px-4 text-center">
        <h2 className="text-lg font-semibold text-gray-900">
          {firstName} {lastName}
        </h2>
        <p className="text-sm text-gray-500">{profession}</p>
        <p className="text-sm text-gray-600 mt-1">{email}</p>

        <Link to="/profile">
          <button className="mt-3 px-4 py-1 text-sm font-medium text-black border border-blue-600 rounded-full hover:bg-blue-50 transition">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
