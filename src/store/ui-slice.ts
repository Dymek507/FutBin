import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../modules/modelTypes";

interface UiState {
  menuIsVisible: boolean;
  logged: boolean;
  // uId: string | null;
  userData: UserData;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menuIsVisible: false,
    logged: false,
    // uId: null,
    userData: {
      login: "",
      uId: null,
      money: 0,
      result: { wins: 0, draws: 0, loses: 0 },
      goals: { goalsFor: 0, goalsAgainst: 0 },
    },
  } as UiState,

  reducers: {
    login(
      state,
      action: PayloadAction<{ logged: boolean; userData: UserData }>
    ) {
      state.logged = action.payload.logged;
      // state.uId = action.payload.uId;
      state.userData = action.payload.userData;
    },
    logout(state) {
      state.logged = false;
      // state.uId = null;
      state.userData = {
        login: "",
        uId: null,
        money: 0,
        result: { wins: 0, draws: 0, loses: 0 },
        goals: { goalsFor: 0, goalsAgainst: 0 },
      };
    },
    toggle(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
    hideMenu(state) {
      state.menuIsVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
