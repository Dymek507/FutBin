import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { menuIsVisible: false, logged: false, uId: null },
  reducers: {
    login(state, action) {
      state.logged = action.payload.logged;
      state.uId = action.payload.uId;
    },
    toggle(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
    hideMenu(state) {
      state.menuIsVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
