import axios from "axios";

import { playersActions } from "./players-slice";

const AuthToken = "9da99810-9712-4bb5-a2a6-73e3df0078c0";

const axiosGetData = {
  headers: {
    Accept: "application/json",
    "X-Auth-Token": AuthToken,
  },
};

export const drawPlayer = (playerRating, person) => {
  return async (dispatch) => {
    const fetchPlayerData = async () => {
      const playerId = Math.floor(Math.random() * 16000);
      let playerData;
      await axios
        .get(`https://futdb.app/api/players/${playerId}`, axiosGetData)
        .then((res) => res.data.player)
        .then((player) => {
          // console.log("1");
          playerData = player;
        });
      return playerData;
    };

    const rerender = async () => {
      const playerData = await fetchPlayerData(person);
      if (
        playerData &&
        playerData.rating > playerRating &&
        playerData.rarity <= 1
      ) {
        console.log(playerData);
        dispatch(playersActions.addPlayer(playerData));
      } else {
        return rerender();
      }
    };
    rerender();
  };
};
