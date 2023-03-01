import { packsActions } from "./packs-slice";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../firebaseConfig";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const receivePackData = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const uId = getState().ui.userData.uId;

    if (uId !== null) {
      const userDocRef = doc(db, `users/${uId}`);
      try {
        const userDoc = await getDoc(userDocRef);

        if (userDoc.data() !== undefined) {
          const packs = userDoc.data()?.packs;
          if (userDoc.data()?.packs?.length !== 0) {
            dispatch(packsActions.replaceAllMyPacks(packs));
          }
        } else {
        }
      } catch (error) {
        console.log("Błąd" + error);
      }
    }
  };
};

export const sendPackData = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const uId = getState().ui.userData.uId;
    const myPacks = getState().packs.myPacks;
    if (uId !== null) {
      const userDocRef = doc(db, `users/${uId}`);
      try {
        await updateDoc(userDocRef, {
          packs: myPacks,
        });
      } catch (error) {
        console.log(`Błąd wysyłania ${error}`);
      }
    } else {
      alert("Nie jesteś zalogowany");
    }
  };
};
