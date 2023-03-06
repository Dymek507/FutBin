import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin-slice";
import packsSlice from "./packs-slice";
import playersDataSlice from "./players-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    players: playersDataSlice.reducer,
    packs: packsSlice.reducer,
    admin: adminSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
