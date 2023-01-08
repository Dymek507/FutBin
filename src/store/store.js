import { configureStore } from "@reduxjs/toolkit";
import packsSlice from "./packs-slice";
import playersDataSlice from "./players-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    players: playersDataSlice.reducer,
    packs: packsSlice.reducer,
  },
});

export default store;
