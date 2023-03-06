import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Player, ISlot } from "../modules/modelTypes";
import type { RootState } from "./store";
import { formation1 } from "../data/formations";

interface PlayersState {
  myPlayers: Player[];
  currentPack: Player[];
  mySquad: ISlot[];
}

const initialState: PlayersState = {
  myPlayers: [],
  currentPack: [],
  mySquad: formation1,
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
    updateMySquad: (
      state,
      action: PayloadAction<{ nr: number; playerId: number }>
    ) => {
      const newMySquad = [...state.mySquad];
      const positionIndex = newMySquad.findIndex(
        (pos) => pos.nr === action.payload.nr
      );
      if (positionIndex >= 0) {
        newMySquad[positionIndex].playerId = action.payload.playerId;
        state.mySquad = newMySquad;
      }
    },
    replaceMySquad: (state, action: PayloadAction<ISlot[]>) => {
      state.mySquad = action.payload;
    },
  },
});

export const playersActions = playersDataSlice.actions;

export default playersDataSlice;
