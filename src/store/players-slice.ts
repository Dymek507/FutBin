import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Player } from "../modules/modelTypes";
import type { RootState } from "./store";

interface PlayersState {
  myPlayers: Player[];
  currentPack: Player[];
  // changed: boolean;
}

const initialState: PlayersState = {
  myPlayers: [],
  currentPack: [],
  // changed: false,
};
const playersDataSlice = createSlice({
  name: "PlayersDatabase",
  initialState,
  reducers: {
    replaceAllMyPlayers: (state, action: PayloadAction<Player[]>) => {
      state.myPlayers = action.payload;
    },
    addPlayerToMyPlayers: (state, action: PayloadAction<Player>) => {
      state.myPlayers.push(action.payload);
    },
    deleteFromMyPlayers: (state, action: PayloadAction<number>) => {
      const playerId = action.payload;
      const newMyPlayers = [...state.myPlayers];
      state.myPlayers = newMyPlayers.filter((player) => player.id !== playerId);
    },
    addPlayerToPack: (state, action: PayloadAction<Player>) => {
      state.currentPack.push(action.payload);
    },
    deleteCurrentPack: (state) => {
      state.currentPack = [];
    },
    deletePlayerFromCurrentPack: (state, action: PayloadAction<number>) => {
      const playerId = action.payload;
      const newCurrentPack = [...state.currentPack];
      state.currentPack = newCurrentPack.filter(
        (player) => player.id !== playerId
      );
    },
  },
});

export const playersActions = playersDataSlice.actions;

export default playersDataSlice;
