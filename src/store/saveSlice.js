// store/saveSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Utility to safely get userId
const getUserId = () => localStorage.getItem("userId");

// Utility to get saved posts from localStorage
const getSavedPosts = () => {
  const userId = getUserId();
  if (!userId) return [];
  const stored = localStorage.getItem(`savedPosts_${userId}`);
  return stored ? JSON.parse(stored) : [];
};

const initialState = {
  savedPosts: getSavedPosts(),
};

const savePostSlice = createSlice({
  name: "savePost",
  initialState,
  reducers: {
    savePost: (state, action) => {
      const postId = action.payload;
      if (!state.savedPosts.includes(postId)) {
        state.savedPosts.push(postId);
        const userId = getUserId();
        if (userId) {
          localStorage.setItem(`savedPosts_${userId}`, JSON.stringify(state.savedPosts));
        }
      }
    },
    unsavePost: (state, action) => {
      const postId = action.payload;
      state.savedPosts = state.savedPosts.filter((id) => id !== postId);
      const userId = getUserId();
      if (userId) {
        localStorage.setItem(`savedPosts_${userId}`, JSON.stringify(state.savedPosts));
      }
    },
    clearAllSavedPosts: (state) => {
      state.savedPosts = [];
      const userId = getUserId();
      if (userId) {
        localStorage.removeItem(`savedPosts_${userId}`);
      }
    },
  },
});

export const { savePost, unsavePost, clearAllSavedPosts } = savePostSlice.actions;
export default savePostSlice.reducer;
