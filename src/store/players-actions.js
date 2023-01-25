import { playersActions } from "./players-slice";

export const fetchPlayersData = () => {
  return async (dispatch) => {
    const response = await fetch(
      `https://eu-central-1.aws.data.mongodb-api.com/app/futdraft-orwfy/endpoint/players`
    );

    const data = await response.json();
    const playersData = data;
    dispatch(playersActions.replaceAllMyPlayers(playersData || []));
  };
};
// export const fetchPlayersData = () => {
//   console.log("fetch");
//   return async (dispatch) => {
//     console.log("fetch2");
//     const fetchData = async () => {
//       const response = await fetch(
//         `https://eu-central-1.aws.data.mongodb-api.com/app/futdraft-orwfy/endpoint/players`
//       );

//       if (!response.ok) {
//         throw new Error("Could not fetch players data!");
//       }

//       const data = await response.json();
//       console.log(data);

//       return data;
//     };

//     try {
//       const playersData = await fetchData();
//       console.log(`Gracze z database ${playersData}`);
//       dispatch(
//         playersActions.replacePlayers({
//           playersArray: playersData.playersArray || [],
//         })
//       );
//     } catch (error) {
//       console.log("Błąd" + error);
//     }
//   };
// };

export const sendPlayersData = (players) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://eu-central-1.aws.data.mongodb-api.com/app/futdraft-orwfy/endpoint/players`,
        {
          method: "POST",
          // body: players, //może być błąd
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
