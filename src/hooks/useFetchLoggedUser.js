import { useEffect, useState } from "react";

const useFetchLoggedUser = (userId) => {

  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const url = "http://localhost:1337/api/users/" + userId + "?populate=UserIcon";

    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setUserInfo(json)
    };

    fetchData();
  }, [userId]);

  return userInfo;
};

export default useFetchLoggedUser;
