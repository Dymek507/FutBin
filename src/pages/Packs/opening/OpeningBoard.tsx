import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendPlayersData, fetchPlayersData } from "../../../store/players-actions";
import { playersActions } from "../../../store/players-slice";
import { Button, Grid } from "@mui/material";

import Card from "../../../components/Card";

import type { Player } from "../../../modules/modelTypes";
import { useAppDispatch, useAppSelector } from "../../../store/app/hooks";
import GridView from "../../../components/GridView";
import manageMoney from "../../../store/app/manageMoney";
import useGeneratePrice from "../../../hooks/generatePrice";
import generatePrice from "../../../hooks/generatePrice";

type OpeningBoardProps = {
  onClose: (state: boolean) => void
}


const OpeningBoard = ({ onClose }: OpeningBoardProps) => {
  const [pickedPlayers, setPickedPlayers] = useState<Player[] | []>([]);

  const dispatch = useAppDispatch();

  const currentPack = useAppSelector((state) => state.players.currentPack);
  const myPlayers = useAppSelector((state) => state.players.myPlayers);
  const uId = useAppSelector(state => state.ui.userData.uId)

  useEffect(() => {
    if (myPlayers && myPlayers.length === 0) {
      dispatch(fetchPlayersData());
    }
  }, [dispatch]);

  // Makes array with picked players, ready to send to myPlayers
  const pickPlayer = (playerData: Player) => {
    const playerExists = pickedPlayers.find(
      (player) => player.id === playerData.id
    );

    if (!playerExists) {
      setPickedPlayers((prev) => [...prev, playerData]);
    } else {
      let newPickedPlayers = [...pickedPlayers];
      newPickedPlayers = newPickedPlayers.filter(
        (player) => player.id !== playerExists.id
      );
      setPickedPlayers(newPickedPlayers);
    }
  };

  const sendAllPlayer = () => {
    currentPack.forEach((player) => {
      dispatch(playersActions.addPlayerToMyPlayers(player));
    });
    if (myPlayers.length === 0) {
      dispatch(fetchPlayersData());
    }
    dispatch(playersActions.deleteCurrentPack());
    dispatch(sendPlayersData());
    onClose(false);
  };

  const sendPickedPlayers = () => {
    //Send players from pack to my players
    pickedPlayers.forEach((player) => {
      dispatch(playersActions.addPlayerToMyPlayers(player));
      dispatch(playersActions.deletePlayerFromCurrentPack(player.id));
    });
    //Prevent case if somehow my players havent fetched and my players on server could be replaced with empty array.
    if (myPlayers.length === 0) {
      dispatch(fetchPlayersData());
    }
    //This is a glitch, user can sell player and next open prev pack -- 
    // >>to fix later<<
    currentPack.forEach((player) => {
      if (uId !== null && player.playerPrice !== undefined) {
        manageMoney(uId, player.playerPrice);
        // dispatch(deletePlayer(player.id));
      }
    });
    dispatch(sendPlayersData());
    onClose(false);
  };

  const rejectAllPlayers = () => {
    console.log('reject')
    console.log(currentPack)
    currentPack.forEach((player) => {
      if (uId !== null) {
        if (player.playerPrice !== undefined) {
          console.log(player.playerPrice)
          manageMoney(uId, player.playerPrice);
        } else {
          const { playerPrice } = generatePrice(player)
          manageMoney(uId, playerPrice)
        }
        // dispatch(deletePlayer(player.id));
      }
    });
    onClose(false);
  };

  return (
    <div className="relative flex flex-col w-screen h-screen bg-opening-c bg-cover overflow-x-hidden">
      <div className="flex justify-center mt-12 mb-4 gap-2">
        <Button size="large" color="secondary" variant="contained" onClick={sendAllPlayer}>
          Send All
        </Button>
        <Button size="large" color="secondary" variant="contained" onClick={sendPickedPlayers}>
          Send Chosen
        </Button>
        <Button size="large" color="secondary" variant="contained" onClick={rejectAllPlayers}>
          Reject
        </Button>
      </div>
      <div className="flex w-full overflow-x-hidden justify-center">
        {currentPack &&
          <GridView playersArray={currentPack} pickPlayer={pickPlayer} cardSize="14px" pickedPlayers={pickedPlayers} xxs={12}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2} />
        }
      </div>
    </div>
  );
};

export default OpeningBoard;
