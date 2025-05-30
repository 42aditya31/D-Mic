import React from "react";
import ProfileCard from "../../Pages/Profile/ProfileCard";
import { useSelector } from "react-redux";
import useFetchLoggedUser from "../../hooks/useFetchLoggedUser";
import AddPost from "../Post/AddPost";
import PostContainer from "../Post/PostContainer";

const Body = () => {
  const user = useSelector((store) => store.user.userInfo);
  const userInfo = useFetchLoggedUser(user?.id);

  return (
    <div className="w-full flex justify-center px-4 py-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        {/* Left Sidebar - Profile Card */}
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <ProfileCard
            firstName={userInfo?.FirstName}
            lastName={userInfo?.LastName}
            profession={userInfo?.Proffesion}
            email={userInfo?.email}
            url={userInfo?.UserIcon?.url}
          />
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-2/3 lg:w-3/4 flex flex-col gap-4">
          <AddPost />

          {/* Now no fixed height or overflow-hidden */}
          <div className="bg-white rounded-xl shadow-sm px-2 py-4">
            <PostContainer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Body;
