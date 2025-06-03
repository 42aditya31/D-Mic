
import { createSlice } from '@reduxjs/toolkit';

const initialState = { post: null };

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPostInfo: (state, action) => { state.post = action.payload }
  },
});

export const { addPostInfo} = postSlice.actions;
export default postSlice.reducer;
