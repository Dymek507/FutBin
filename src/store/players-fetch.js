import axios from "axios";

import { playersActions } from "./players-slice";
import { apiKey } from "../futDbConfig";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebaseConfig";

const AuthToken = apiKey;

const axiosGetData = {
  headers: {
    Accept: "application/json",
    "X-Auth-Token": AuthToken,
  },
};

export const getUnavailablePlayersIds = async () => {
  const unavailablePlayers = [];

  try {
    const allUsers = await getDocs(collection(db, "users"));
    allUsers.forEach((doc) => {
      unavailablePlayers.push(...doc.data().playersData);
      unavailablePlayers.push(...doc.data().currentPackPlayers);
    });
  } catch (error) {
    console.log(`Błąd wysyłania ${error}`);
  }
  const unavailablePlayersIds = unavailablePlayers.map((player) => player.id);
  return unavailablePlayersIds;
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
      const unavailablePlayersIds = await getUnavailablePlayersIds();

      if (
        playerData &&
        playerData.rating > playerRating &&
        playerData.rarity <= 1 &&
        //Check if player isnt unavailable
        unavailablePlayersIds.filter((id) => playerData.id === id).length === 0
      ) {
        dispatch(playersActions.addPlayerToPack(playerData));
      } else {
        return rerender();
      }
    };
    rerender();
  };
};
