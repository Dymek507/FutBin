import { playersActions } from "./players-slice";

export const fetchPlayersData = (person) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://futdraftbeta-default-rtdb.europe-west1.firebasedatabase.app/${person}/players.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch players data!");
      }

      const data = await response.json();
      console.log(data);

      return data;
    };

    try {
      const playersData = await fetchData();
      console.log(`Gracze z database ${playersData}`);
      dispatch(
        playersActions.replacePlayers({
          playersArray: playersData.playersArray || [],
        })
      );
    } catch (error) {
      console.log("Błąd" + error);
    }
  };
};

export const sendPlayersData = (players, person) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://futdraftbeta-default-rtdb.europe-west1.firebasedatabase.app/${person}/players.json`,
        {
          method: "PUT",
          body: JSON.stringify(players), //może być błąd
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
