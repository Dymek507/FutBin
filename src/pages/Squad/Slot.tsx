import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../store/app/hooks';
import { Player, ISlot } from '../../modules/modelTypes'
import MicroCard from './MicroCard';

import blankSlot from '../../assets/blank-card-micro.png'

interface ISlotWithFunction extends ISlot {

  openModal: (nr: number) => void
}

const Slot = ({ nr, pos, x, y, playerId, openModal }: ISlotWithFunction) => {


  const [player, setPlayer] = useState<Player | null>(null)
  const myPlayers = useAppSelector(state => state.players.myPlayers)


  useEffect(() => {
    const player = myPlayers.filter(player => player.id === playerId)
    if (player.length === 1) {
      setPlayer(player[0])
    }
  }, [playerId, myPlayers])


  return (
    <div
      key={nr}
      onClick={() => openModal(nr)}
      className="absolute flex-center w-[4.5em] origin-center translate-x-[-50%] cursor-pointer"
      style={{ bottom: `${x}%`, left: `${y}%` }}
    >
      {player ? <MicroCard playerData={player} fontSize={'0.3em'} /> : <img className='w-[4.5em]' src={blankSlot} alt="blank_slot" />}
    </div>
  )
}

export default Slot