import { playersActions } from "./players-slice";

export const fetchPlayersData = () => {
  console.log("fetch");
  return async (dispatch, getState) => {
    const uId = getState().ui.uId;
    // const uId = (state) => state.ui.uId;
    console.log(uId);
    console.log("fetch2");
    const fetchData = async () => {
      const response = await fetch(
        `https://futdraft-5f63c-default-rtdb.europe-west1.firebasedatabase.app/users/${uId}/players-data.json`
        // `https://eu-central-1.aws.data.mongodb-api.com/app/futdraft-orwfy/endpoint/players`
      );

      let data = await response.json();
      if (data === null) {
        data = [];
      }
      // Transform firebase object with weird id to array
      // const finalData = data[Object.keys(data)[0]];

      return data;
    };

    try {
      const playersData = await fetchData();
      dispatch(playersActions.replaceAllMyPlayers(playersData));
      // dispatch(playersActions.replaceAllMyPlayers(playersData || []));
    } catch (error) {
      console.log("Błąd" + error);
    }
  };
};

export const sendPlayersData = (players) => {
  return async (dispatch, getState) => {
    const uId = getState().ui.uId;
    const myPlayers = await getState().players.myPlayers;
    const sendRequest = async () => {
      const response = await fetch(
        `https://futdraft-5f63c-default-rtdb.europe-west1.firebasedatabase.app/users/${uId}/players-data.json`,
        // `https://eu-central-1.aws.data.mongodb-api.com/app/futdraft-orwfy/endpoint/players`,
        {
          method: "PUT",
          body: JSON.stringify(myPlayers),
          // mode: "no-cors",
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
