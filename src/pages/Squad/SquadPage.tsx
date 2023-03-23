import React, { useState, useEffect, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../../store/app/hooks";
import ChoseOnPositionModal from "./ChoseOnPositionModal";
import Slot from "./Slot";
import { Player } from "../../types/modelTypes";
import { addPlayerOnPosition, fetchPlayersData, fetchSquadData } from "../../store/players-actions";
import { LinearProgress } from "@mui/material";

export const formation1 = [
  { nr: 1, pos: "GK", x: 0, y: 50, playerId: null },
  { nr: 2, pos: "RB", x: 20, y: 90, playerId: null },
  { nr: 3, pos: "LB", x: 20, y: 10, playerId: null },
  { nr: 4, pos: "CB", x: 30, y: 40, playerId: null },
  { nr: 5, pos: "CB", x: 30, y: 60, playerId: null },
  { nr: 6, pos: "CM", x: 40, y: 30, playerId: null },
  { nr: 7, pos: "RM", x: 70, y: 80, playerId: null },
  { nr: 8, pos: "CM", x: 40, y: 70, playerId: null },
  { nr: 9, pos: "ST", x: 75, y: 50, playerId: null },
  { nr: 10, pos: "CAM", x: 55, y: 50, playerId: null },
  { nr: 11, pos: "LM", x: 70, y: 20, playerId: null },
];

const Squad = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(1)
  const [avaiablePlayer, setAvaiablePlayers] = useState<Player[] | null>(null)
  const mySquad = useAppSelector(state => state.players.mySquad)
  const myPlayers = useAppSelector(state => state.players.myPlayers)
  const uId = useAppSelector(state => state.ui.userData.uId)
  //Check if component refresh after fetch
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchPlayersData());
    dispatch(fetchSquadData());
  }, [dispatch, uId]);

  useEffect(() => {
    const newAvaiablePlayer = myPlayers.filter(player => mySquad.some(pos => pos.playerId !== player.id))
    setAvaiablePlayers(newAvaiablePlayer)
  }, [myPlayers, mySquad]);

  const addOnPositionHandler = (nr: number, playerId: number) => {
    dispatch(addPlayerOnPosition(nr, playerId))
    setShowModal(false)
  }
  const openModalHandler = (nr: number) => {
    setShowModal(true)
    setCurrentPosition(nr)
  }
  return (

    <div className="flex justify-center items-center w-full ">
      {showModal ?
        <ChoseOnPositionModal open={showModal} onClose={() => setShowModal(false)} avaiablePlayer={avaiablePlayer} addOnPositionHandler={addOnPositionHandler} currentPosition={currentPosition} />
        : null}
      <div className="relative h-full w-full sm:max-w-[1000px] bg-squad-field bg-center bg-cover bg-no-repeat text-[24px]">
        <Suspense fallback={<div className="w-screen">
          <LinearProgress />
        </div>}>
          {mySquad.map((item) => (
            <Slot key={item.nr} nr={item.nr} pos={item.pos} x={item.x} y={item.y} playerId={item.playerId} openModal={openModalHandler} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Squad;
