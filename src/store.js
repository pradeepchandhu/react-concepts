import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    name: "Pradeep Chandhu",
  },

  reducers: {},
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});