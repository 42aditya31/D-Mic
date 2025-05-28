import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import useFetchLoggedUser from "../../hooks/useFetchLoggedUser";
import ProfilePostContainer from "../../Components/Post/ProfilePostContainer";

const Profile = () => {
  const user = useSelector((store) => store.user.userInfo);
  const userInfo = useFetchLoggedUser(user?.id);

  return (
    <div className="w-full flex justify-center px-4 py-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        {/* Left Sidebar */}
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <ProfileCard
            firstName={userInfo?.FirstName}
            lastName={userInfo?.LastName}
            profession={userInfo?.Proffesion}
            email={userInfo?.email}
            url={userInfo?.UserIcon?.url}
          />
        </aside>

        {/* Main Feed */}
        <main className="w-full md:w-2/3 lg:w-3/4">
          <div className="bg-white rounded-xl shadow-sm p-4 h-full">
            <ProfilePostContainer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
