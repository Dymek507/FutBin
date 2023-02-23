import { doc, getDoc, updateDoc } from "@firebase/firestore";

import { playersActions } from "./players-slice";
import { db } from "../firebaseConfig";

export const fetchPlayersData = () => {
  return async (dispatch, getState) => {
    const uId = await getState().ui.userData?.uId;
    console.log(uId);

    if (uId !== null) {
      const userDocRef = doc(db, `users/${uId}`);
      try {
        const userDoc = await getDoc(userDocRef);

        if (userDoc.data() !== undefined) {
          const players = userDoc.data().playersData;
          if (
            userDoc.data().playersData &&
            userDoc.data().playersData.length !== 0
          ) {
            dispatch(playersActions.replaceAllMyPlayers(players));
          }
        } else {
        }
      } catch (error) {
        console.log("Błąd" + error);
      }
    }
  };
};

export const sendPlayersData = (players) => {
  return async (dispatch, getState) => {
    const uId = await getState().ui.userData.uId;
    const myPlayers = await getState().players.myPlayers;
    if (uId !== null) {
      const userDocRef = doc(db, `users/${uId}`);
      try {
        await updateDoc(userDocRef, {
          playersData: myPlayers,
        });
      } catch (error) {
        console.log(`Błąd wysyłania ${error}`);
      }
    } else {
      alert("Nie jesteś zalogowany");
    }
  };
};

export const deletePlayer = (id) => {
  return async (dispatch, getState) => {
    await dispatch(playersActions.deleteFromMyPlayers(id));
    const uId = await getState().ui.userData.uId;
    const myPlayers = await getState().players.myPlayers;
    const userDocRef = doc(db, `users/${uId}`);

    try {
      await updateDoc(userDocRef, { playersData: myPlayers });
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
};
