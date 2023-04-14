import axios from "axios";

import { collection, getDocs } from "@firebase/firestore";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import { playersActions } from "./players-slice";
import { db } from "../firebaseConfig";
import { Player } from "../types/modelTypes";
import { RootState } from "./store";
import { TOP_PLAYERS } from "../data/top-players";

const AuthToken = process.env.REACT_APP_FUT_DB_KEY;

const axiosGetData = {
  headers: {
    Accept: "application/json",
    "X-Auth-Token": AuthToken,
  },
};

export const getUnavailablePlayersIds = async (): Promise<number[]> => {
  const unavailablePlayers: Player[] = [];

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

export const drawPlayer = (
  playerRating: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    //If player rating is lower than 75, draw player id and fetch player data from futdb api
    const fetchPlayerData = async (): Promise<Player> => {
      const playerId = Math.floor(Math.random() * 16000);
      return await axios
        .get(`https://futdb.app/api/players/${playerId}`, axiosGetData)
        .then((res) => res.data.player)
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });
    };
    //Draw player from top players file stored in app.
    const fetchPlayerDataFromTopPlayers = () => {
      const player =
        TOP_PLAYERS[Math.floor(Math.random() * TOP_PLAYERS.length)];
      return player;
    };

    const rerender = async (): Promise<void> => {
      let playerData: Player;

      if (playerRating > 79) {
        playerData = fetchPlayerDataFromTopPlayers();
      } else {
        playerData = await fetchPlayerData();
      }

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
