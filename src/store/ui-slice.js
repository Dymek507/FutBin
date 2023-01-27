import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menuIsVisible: false,
    logged: false,
    uId: null,
    userData: "",
  },
  reducers: {
    login(state, action) {
      state.logged = action.payload.logged;
      state.uId = action.payload.uId;
      state.userData = action.payload.userData;
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
