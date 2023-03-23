import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { RootState } from "./store";
import { uiActions } from "./ui-slice";
import { UserData } from "../types/modelTypes";

//Poprawić akcje ui i ui slice

export const logIn =
  (uId: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    if (uId !== null) {
      const userDocRef = doc(db, `users/${uId}`);
      try {
        const userDoc = await getDoc(userDocRef);
        const userObject = userDoc.data();
        if (userObject !== undefined) {
          const userData: UserData = {
            login: userObject!.login,
            uId: uId,
            money: userObject!.money,
            result: userObject!.result,
            goals: userObject!.goals,
          };
          dispatch(uiActions.login({ logged: true, userData }));
          console.log("Sign-in successful.");
        }
      } catch (error) {
        console.log("Błąd" + error);
      }
    }
  };

export const logOut =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    signOut(auth)
      .then(() => {
        dispatch(
          uiActions.login({
            logged: false,
            userData: {
              login: "",
              uId: null,
              money: 0,
              result: { wins: 0, draws: 0, loses: 0 },
              goals: { goalsFor: 0, goalsAgainst: 0 },
            },
          })
        );
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };
