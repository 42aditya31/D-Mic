import React from "react";
import ProfileCard from "../../Pages/Profile/ProfileCard";
import { useSelector } from "react-redux";
import useFetchLoggedUser from "../../hooks/useFetchLoggedUser";

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

        {/* Optional Main Content */}
        <main className="w-full md:w-2/3 lg:w-3/4">
          {/* Placeholder - You can replace this with any component */}
          <div className="w-full h-64 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-500 text-lg">
            Main Content Goes Here
          </div>
        </main>
      </div>
    </div>
  );
};

export default Body;
