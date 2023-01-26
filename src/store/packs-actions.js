import { playersActions } from "./players-slice";

export const receivePackData = () => {
  console.log("fetch");
  return async (dispatch, getState) => {
    const uId = getState().ui.uId;
    console.log("fetch2");
    const fetchData = async () => {
      const response = await fetch(
        `https://futdraft-5f63c-default-rtdb.europe-west1.firebasedatabase.app/users/${uId}/packs.json`
      );

      let data = await response.json();
      if (data === null) {
        data = [];
      }

      return data;
    };

    try {
      const playersData = await fetchData();
      dispatch(playersActions.replaceAllMyPlayers(playersData));
    } catch (error) {
      console.log("Błąd" + error);
    }
  };
};

export const sendPackData = (players) => {
  return async (dispatch, getState) => {
    const uId = getState().ui.uId;
    const myPlayers = await getState().players.myPlayers;
    const sendRequest = async () => {
      const response = await fetch(
        `https://futdraft-5f63c-default-rtdb.europe-west1.firebasedatabase.app/users/${uId}/packs.json`,
        {
          method: "PUT",
          body: JSON.stringify(myPlayers),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Sending players data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
};
