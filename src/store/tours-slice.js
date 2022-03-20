import { createSlice } from "@reduxjs/toolkit";

const toursSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
  },

  reducers: {
    setTours(state, action) {
      const { tours } = action.payload;
      state.tours = tours;
    },
    addTour(state, action) {
      const { newTour } = action.payload;
      state.tours = [newTour, ...state.tours];
    },
    removeTour(state, action) {
      const { id } = action.payload;
      state.tours = state.tours.filter((tour) => tour._id !== id);
    },
  },
});

export const toursActions = toursSlice.actions;

export default toursSlice;
