import { useEffect, useState } from "react";

const useFetchPost = () => {

  const [allPost, setallPost] = useState();
  useEffect(() => {
    const url = "http://localhost:1337/api/articles?populate=*";

    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setallPost(json)
    };

    fetchData();
  }, []);

  return allPost;
};

export default useFetchPost;
