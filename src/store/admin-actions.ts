import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { ResultT } from "../types/modelTypes";
import { adminActions } from "./admin-slice";
import { RootState } from "./store";
import resultHandler from "./app/resultHandler";
import manageMoney from "./app/manageMoney";

export const sendResults =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const results = getState().admin.results;

    const userDocRef = doc(db, `admin/admin-board`);
    try {
      await updateDoc(userDocRef, {
        results: results,
      });
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
export const getResults =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const userDocRef = doc(db, `admin/admin-board`);
    try {
      const userDoc = await getDoc(userDocRef);

      if (userDoc.data() !== undefined) {
        const results = userDoc.data()?.results;
        if (userDoc.data()?.results.length !== 0) {
          dispatch(adminActions.replaceAllResults(results));
        }
      }
    } catch (error) {
      console.log("Błąd" + error);
    }
  };
export const addResultAction = (
  result: ResultT
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(adminActions.addResult(result));
    manageMoney(
      result.userOneUid,
      resultHandler(result.userOneGoals, result.userTwoGoals)
    );
    manageMoney(
      result.userTwoUid,
      resultHandler(result.userTwoGoals, result.userOneGoals)
    );
    const results = getState().admin.results;
    const userDocRef = doc(db, `admin/admin-board`);

    try {
      await updateDoc(userDocRef, {
        results: results,
      });
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
};
export const deleteResultAction = (
  id: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(adminActions.deleteResult(id));
    const results = getState().admin.results;
    const userDocRef = doc(db, `admin/admin-board`);

    try {
      await updateDoc(userDocRef, {
        results: results,
      });
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
};
