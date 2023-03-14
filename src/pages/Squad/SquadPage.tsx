import React, { useState, useEffect } from "react";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/app/hooks";
import Card from "../../components/Card";
import dummyPlayer from "../../data/dummyPlayer";
import ChoseOnPositionModal from "./ChoseOnPositionModal";
import Slot from "./Slot";
import { Player } from "../../modules/modelTypes";
import { addPlayerOnPosition, fetchPlayersData, fetchSquadData } from "../../store/players-actions";


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
    <div className="flex justify-center items-center w-full">
      {showModal ? <ChoseOnPositionModal open={showModal} onClose={() => setShowModal(false)} avaiablePlayer={avaiablePlayer} addOnPositionHandler={addOnPositionHandler} currentPosition={currentPosition} /> : null}
      <div className="relative h-full w-full text-[22px] sm:max-w-[1000px] bg-squad-field bg-center bg-no-repeat bg-[length:100%_100%]">
        {mySquad.map((item) => (
          <Slot key={item.nr} nr={item.nr} pos={item.pos} x={item.x} y={item.y} playerId={item.playerId} openModal={openModalHandler} />
        ))}
      </div>
    </div>
  );
};

export default Squad;
