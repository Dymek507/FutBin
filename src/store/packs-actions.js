import { packsActions } from "./packs-slice";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../firebaseConfig";

export const receivePackData = () => {
  return async (dispatch, getState) => {
    const uId = getState().ui.userData.uId;

    if (uId !== null) {
      const userDocRef = doc(db, `users/${uId}`);
      try {
        const userDoc = await getDoc(userDocRef);

        if (userDoc.data() !== undefined) {
          const packs = userDoc.data().packs;
          if (userDoc.data().packs && userDoc.data().packs.length !== 0) {
            dispatch(packsActions.replaceAllMyPacks(packs));
          }
        } else {
        }
      } catch (error) {
        console.log("Błąd" + error);
      }
    }
    // const fetchData = async () => {
    //   const response = await fetch(
    //     `https://futdraft-5f63c-default-rtdb.europe-west1.firebasedatabase.app/users/${uId}/packs.json`
    //   );

    //   let data = await response.json();
    //   if (data === null) {
    //     data = [];
    //   }

    //   return data;
    // };

    // try {
    //   const packsData = await fetchData();
    //   dispatch(packsActions.replaceAllMyPacks(packsData));
    // } catch (error) {
    //   console.log("Błąd" + error);
    // }
  };
};

export const sendPackData = () => {
  return async (dispatch, getState) => {
    const uId = await getState().ui.userData.uId;
    const myPacks = await getState().packs.myPacks;
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

    // const uId = getState().ui.userData.uId;
    // const myPacks = await getState().packs.myPacks;
    // const sendRequest = async () => {
    //   await fetch(
    //     `https://futdraft-5f63c-default-rtdb.europe-west1.firebasedatabase.app/users/${uId}/packs.json`,
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(myPacks),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    // };

    // try {
    //   await sendRequest();
    // } catch (error) {
    //   console.log(`Błąd wysyłania ${error}`);
    // }
  };
};
