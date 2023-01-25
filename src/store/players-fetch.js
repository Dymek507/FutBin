import axios from "axios";

import { playersActions } from "./players-slice";

const AuthToken = "9317d346-9be7-4023-8872-0114c73d26a6";

const axiosGetData = {
  headers: {
    Accept: "application/json",
    "X-Auth-Token": AuthToken,
  },
};

export const drawPlayer = (playerRating) => {
  return async (dispatch) => {
    const fetchPlayerData = async () => {
      const playerId = Math.floor(Math.random() * 16000);
      let playerData;
      await axios
        .get(`https://futdb.app/api/players/${playerId}`, axiosGetData)
        .then((res) => res.data.player)
        .then((player) => {
          playerData = player;
        });
      return playerData;
    };

    const rerender = async () => {
      const playerData = await fetchPlayerData();
      if (
        playerData &&
        playerData.rating > playerRating &&
        playerData.rarity <= 1
      ) {
        dispatch(playersActions.addPlayerToPack(playerData));
      } else {
        return rerender();
      }
    };
    rerender();
  };
};
