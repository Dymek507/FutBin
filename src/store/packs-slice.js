import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPacks: [],
};

const packsSlice = createSlice({
  name: "PacksOwned",
  initialState,
  reducers: {
    replaceAllMyPacks: (state, action) => {
      state.myPacks = action.payload;
    },
    addPack: (state, action) => {
      const packId = action.payload.id;
      const updatedPacks = [...state.myPacks];
      const packArrayIndex = updatedPacks.findIndex(
        (pack) => pack.id === packId
      );
      if (packArrayIndex >= 0) {
        updatedPacks[packArrayIndex].packAmount++;
        state.myPacks = updatedPacks;
      } else {
        updatedPacks.push(action.payload);
        state.myPacks = updatedPacks;
      }
    },
    //Find the pack, if last, delete it from array
    removePack: (state, action) => {
      const packId = action.payload;
      const updatedPacks = [...state.myPacks];
      const packArrayIndex = updatedPacks.findIndex(
        (pack) => pack.id === packId
      );
      if (updatedPacks[packArrayIndex].packAmount > 1) {
        updatedPacks[packArrayIndex].packAmount--;
        state.myPacks = updatedPacks;
      } else {
        state.myPacks = updatedPacks.filter((pack) => pack.id !== packId);
      }
    },
  },
});

export const packsActions = packsSlice.actions;

export default packsSlice;
