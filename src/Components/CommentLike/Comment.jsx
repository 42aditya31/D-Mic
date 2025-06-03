import React, { useEffect} from "react";

const Comment = ({ postId }) => {
  // const [post, setPost] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     setLoading(true);
  //     setError("");
  
  //     try {
  //       const res = await fetch("http://localhost:1337/api/articles/:"+ postId);
  //       if (!res.ok) throw new Error("Failed to fetch post");
  //       const data = await res.json();
  //       console.log("Fetched Post:", data);
  //       setPost(data?.data);
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //       setError("Error loading post: " + error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   if (postId) fetchPost();
  // }, [postId]);
  
const fetchData = async()=>{
const data = await fetch("http://localhost:1337/api/articles/:"+ postId);
const json = await data.json()
console.log(json)
}
useEffect(() => {
  
fetchData()
}, []);



  return (
    <div className="p-4 bg-white rounded-md shadow-md w-full max-w-2xl mx-auto mt-6">
      {/* {loading ? (
        <p className="text-gray-500 text-sm">Loading post...</p>
      ) : error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : post ? (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {post.attributes?.title || "Untitled Post"}
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            <strong>Post ID:</strong> {post.id}
          </p>
          <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">
            {post.attributes?.content || "No content"}
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-sm">No post found.</p>
      )} */}
    </div>
  );
};

export default Comment;
