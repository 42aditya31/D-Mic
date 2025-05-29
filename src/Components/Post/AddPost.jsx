import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const AddPost = () => {
  const [content, setContent] = useState('');
  const [published, setPublished] = useState('');
  const [userId, setUserId] = useState('');
  const [preview, setPreview] = useState(false);

  // On mount, set today's date and user ID from localStorage
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setPublished(today);

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      setUserId(user.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      data: {
        content,
        likes: '0', // Default likes
        published,
        users_permissions_user: userId,
      },
    };

    try {
      const response = await fetch('http://localhost:1337/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Post added successfully!');
        setContent('');
      } else {
        console.error('❌ Error:', data);
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert('Failed to post data!');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto my-10 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Create a Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What do you want to talk about?"
          className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-blue-500 resize-none"
          required
        />

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">📅 Published: {published}</span>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setPreview(!preview)}
              className="text-sm text-blue-600 hover:underline"
            >
              {preview ? 'Hide Preview' : 'Preview Markdown'}
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Post
            </button>
          </div>
        </div>
      </form>

      {preview && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-md font-semibold text-gray-700 mb-2">🔍 Live Preview</h3>
          <div className="prose prose-sm max-w-full">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPost;
