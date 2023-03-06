import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResultT } from "../modules/modelTypes";
import { dummyResults } from "../data/dummyResults";

interface AdminState {
  results: ResultT[] | [];
}

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    results: [],
  } as AdminState,

  reducers: {
    addResult(state, action: PayloadAction<ResultT>) {
      const result = action.payload;
      const newResults = [...state.results];
      newResults.push(result);
      state.results = newResults;
    },
    replaceAllResults(state, action: PayloadAction<ResultT[]>) {
      state.results = action.payload;
    },
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice;
