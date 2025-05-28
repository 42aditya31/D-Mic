// Profile.jsx
import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import useFetchLoggedUser from "../../hooks/useFetchLoggedUser";
import ProfilePostContainer from "../../Components/Post/ProfilePostContainer";

const Profile = () => {
  const user = useSelector((store) => store.user.userInfo);
  const userInfo = useFetchLoggedUser(user?.id);

  return (
    <div className="flex flex-row w-full relative justify-center gap-4 px-8 py-6">
      {/* Left Profile Card */}
      <div className="w-80">
        <ProfileCard
          firstName={userInfo?.FirstName}
          lastName={userInfo?.LastName}
          profession={userInfo?.Proffesion}
          email={userInfo?.email}
          url={userInfo?.UserIcon?.url}
        />
      </div>

      {/* Right Posts */}
      <ProfilePostContainer />
    </div>
  );
};

export default Profile;
