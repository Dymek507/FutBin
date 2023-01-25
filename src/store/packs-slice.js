import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packsArray: [
    {
      id: "p1",
      packRating: 70,
      packColor: "teal",
      playersAmount: 3,
      packAmount: 1,
    },
    {
      id: "p2",
      packRating: 60,
      packColor: "red",
      playersAmount: 3,
      packAmount: 2,
    },
    {
      id: "p3",
      packRating: 50,
      packColor: "green",
      playersAmount: 8,
      packAmount: 5,
    },
  ],
};

const packsSlice = createSlice({
  name: "PacksOwned",
  initialState,
  reducers: {
    addPack: (state, action) => {
      state.packsArray.push(action.payload);
    },
    //Find the pack, if last, delete it from array
    removePack: (state, action) => {
      const packId = action.payload;
      const updatedPacks = [...state.packsArray];
      const packArrayIndex = updatedPacks.findIndex(
        (pack) => pack.id === packId
      );
      console.log(packArrayIndex);
      if (updatedPacks[packArrayIndex].packAmount > 1) {
        updatedPacks[packArrayIndex].packAmount--;
        state.packsArray = updatedPacks;
      } else {
        state.packsArray = updatedPacks.filter((pack) => pack.id !== packId);
      }
      console.log(updatedPacks);
    },
  },
});

export const packActions = packsSlice.actions;

export default packsSlice;
