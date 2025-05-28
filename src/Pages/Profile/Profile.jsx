import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import useFetchLoggedUser from "../../hooks/useFetchLoggedUser";

const Profile = () => {

  const user = useSelector((store) => store.user.userInfo);
  
  // console.log(user);
  // console.log(user.id);


const userInfo =   useFetchLoggedUser(user?.id)
console.log(userInfo)
 return (
    <div className="flex flex-row justify-between">
      Profile Page
      <ProfileCard
        firstName={userInfo?.FirstName}
        lastName={userInfo?.LastName}
        profession={userInfo?.Proffesion}
        email={userInfo?.email}
        url={userInfo?.UserIcon?.url}
      />
    </div>
  );
};

export default Profile;
