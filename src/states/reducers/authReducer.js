import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    isUserLoggedIn: false,
    userData: null,
  },
  reducers: {
    setUserAuthData: (state, action) => {
      // console.log("=>>action", action.payload);
      state.userData = action.payload;
      state.isUserLoggedIn = true;
    },
    userLogoutFromStore: (state, action) => {
      state.userData = null;
      state.isUserLoggedIn = false;
    },
  },
});

export const { setUserAuthData, userLogoutFromStore } = authReducer.actions;
export default authReducer.reducer;
