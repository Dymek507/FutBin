import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playersArray: [],
  changed: false,
};
const playersDataSlice = createSlice({
  name: "PlayersDatabase",
  initialState,
  reducers: {
    replacePlayers: (state, action) => {
      state.playersArray = action.payload.playersArray;
    },
    addPlayer: (state, action) => {
      state.playersArray.push(action.payload);
    },
  },
});

export const playersActions = playersDataSlice.actions;

export default playersDataSlice;
