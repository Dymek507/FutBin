import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPacks: [],
};

const packsSlice = createSlice({
  name: "PacksOwned",
  initialState,
  reducers: {
    addPack: (state, action) => {
      state.myPacks.push(action.payload);
    },
    //Find the pack, if last, delete it from array
    removePack: (state, action) => {
      const packId = action.payload;
      const updatedPacks = [...state.myPacks];
      const packArrayIndex = updatedPacks.findIndex(
        (pack) => pack.id === packId
      );
      console.log(packArrayIndex);
      if (updatedPacks[packArrayIndex].packAmount > 1) {
        updatedPacks[packArrayIndex].packAmount--;
        state.myPacks = updatedPacks;
      } else {
        state.myPacks = updatedPacks.filter((pack) => pack.id !== packId);
      }
      console.log(updatedPacks);
    },
  },
});

export const packActions = packsSlice.actions;

export default packsSlice;
