import { configureStore } from "@reduxjs/toolkit";
import playersDataSlice from "./players-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, players: playersDataSlice.reducer },
});

export default store;
