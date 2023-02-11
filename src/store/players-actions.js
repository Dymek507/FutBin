import { doc, getDoc, updateDoc } from "@firebase/firestore";

import { playersActions } from "./players-slice";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";

export const fetchPlayersData = () => {
  return async (dispatch, getState) => {
    const auth = getAuth();
    const uId = auth.currentUser.uid;
    // const uId = getState().ui.uId;

    const userDocRef = doc(db, `users/${uId} `);

    if (uId !== null) {
      try {
        const userDoc = await getDoc(userDocRef);
        const players = userDoc.data();
        console.log(players);
        if (userDoc.data() !== undefined) {
          console.log("try");
          const players = userDoc.data().playersData;
          if (
            userDoc.data().playersData &&
            userDoc.data().playersData.length !== 0
          ) {
            dispatch(playersActions.replaceAllMyPlayers(players));
          }
        }
      } catch (error) {
        console.log("Błąd" + error);
      }
    }
  };
};

export const sendPlayersData = (players) => {
  return async (dispatch, getState) => {
    // const uId = getState().ui.uId;
    const auth = getAuth();
    const uId = auth.currentUser.uid;
    const myPlayers = await getState().players.myPlayers;
    const userDocRef = doc(db, `users/${uId}`);
    try {
      await updateDoc(userDocRef, {
        playersData: myPlayers,
      });
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
};

export const deletePlayer = (id) => {
  return async (dispatch, getState) => {
    await dispatch(playersActions.deleteFromMyPlayers(id));
    const auth = getAuth();
    const uId = auth.currentUser.uid;
    const myPlayers = await getState().players.myPlayers;
    const userDocRef = doc(db, `users/${uId}`);

    try {
      await updateDoc(userDocRef, { playersData: myPlayers });
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
};
