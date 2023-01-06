import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { menuIsVisible: true },
  reducers: {
    toggle(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
