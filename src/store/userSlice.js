// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInfo: (state, action) => { state.user = action.payload },
    clearUserInfo: (state) => { state.user = null },
  },
});

export const { addUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
