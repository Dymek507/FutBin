import { configureStore } from "@reduxjs/toolkit";
import packsSlice from "./packs-slice";
import playersDataSlice from "./players-slice";
import uiSlice from "./ui-slice";
import { pokemonApi } from "../components/rtk/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    players: playersDataSlice.reducer,
    packs: packsSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default store;
setupListeners(store.dispatch);
