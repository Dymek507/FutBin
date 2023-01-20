import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPlayers: [],
  currentPack: [],
  changed: false,
};
const playersDataSlice = createSlice({
  name: "PlayersDatabase",
  initialState,
  reducers: {
    addPlayerToMyPlayers: (state, action) => {
      state.myPlayers.push(action.payload);
    },
    deleteFromMyPlayers: (state, action) => {
      const playerId = action.payload;
      const newMyPlayers = [...state.myPlayers];
      state.myPlayers = newMyPlayers.filter((player) => player.id !== playerId);
    },
    addPlayerToPack: (state, action) => {
      state.currentPack.push(action.payload);
    },
    deleteCurrentPack: (state, action) => {
      state.currentPack = [];
    },
  },
});

export const playersActions = playersDataSlice.actions;

export default playersDataSlice;
