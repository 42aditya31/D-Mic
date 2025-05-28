import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { addUserInfo } = userSlice.actions;
export default userSlice.reducer;
