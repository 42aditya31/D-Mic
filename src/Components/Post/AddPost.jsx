import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const AddPost = ({ name }) => {
  const [content, setContent] = useState("");
  const [published, setPublished] = useState("");
  const [userId, setUserId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [preview, setPreview] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setPublished(today);

    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) {
      setUserId(user.id);
    } else {
      console.warn("No user found in localStorage");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

   const payload = {
  data: {
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          Content: [{ type: "text", text: content }],
        },
      ],
    },
    published,
    users_permissions_user: userId,
  },
};


    try {
      const response = await fetch("http://localhost:1337/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Post added successfully!");
        setContent("");
        setIsOpen(false);
        setPreview(false);
      } else {
        console.error("❌ Error:", data);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Failed to post data!");
    }
  };

  return (
    <div className="relative mb-8">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        {name}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50">
          <div
            ref={containerRef}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-300 max-w-xl w-full relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
              className="absolute top-[0px] right-3 text-gray-500 hover:text-gray-800 text-3xl"
            >
              &times;
            </button>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-start gap-3">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="What do you want to talk about?"
                  className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-blue-500 resize-none"
                  autoFocus
                  required
                />
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{published}</span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setPreview(!preview)}
                    className="text-blue-600 hover:underline"
                  >
                    {preview ? "Hide Preview" : "Preview"}
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                  >
                    Post
                  </button>
                </div>
              </div>

              {preview && (
                <div className="mt-4 border-t pt-3">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Live Preview
                  </h4>
                  <div className="prose prose-sm max-w-full text-gray-800">
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPost;
