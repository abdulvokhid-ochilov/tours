import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import toursSlice from "./tours-slice";
// import productsSlice from "./products-slice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, tours: toursSlice.reducer },
});

export default store;
