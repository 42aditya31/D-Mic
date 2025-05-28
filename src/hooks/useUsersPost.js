import { useEffect, useState } from "react";

const useUserPost = (userId) => {

  const [userPost, setUserPost] = useState();
  useEffect(() => {
    const url = "http://localhost:1337/api/articles?filters[users_permissions_user][id][$eq]=" + userId + "&populate=*";

    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setUserPost(json)
    };

    fetchData();
  }, [userId]);

  return userPost;
};

export default useUserPost;
