import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import toursSlice from "./tours-slice";
import usersSlice from "./users-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    tours: toursSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default store;
