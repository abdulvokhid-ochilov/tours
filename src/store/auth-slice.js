import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: null,
    loginStatus: false,
  },

  reducers: {
    loginUser(state, action) {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
      state.loginStatus = true;
    },
    logoutUser(state, action) {
      state.user = {};
      state.loginStatus = false;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
