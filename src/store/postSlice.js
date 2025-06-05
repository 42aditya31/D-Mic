import { createSlice } from "@reduxjs/toolkit";

const initialState = { post: null, postId: null };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPostInfo: (state, action) => {
      state.post = action.payload;
    },
    addPostId: (state, action) => {
      state.postId = action.payload;
    },
  },
});

export const { addPostInfo, addPostId } = postSlice.actions;
export default postSlice.reducer;
