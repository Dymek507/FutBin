import { LinearProgress, Modal } from '@mui/material'
import React, { Suspense } from 'react'
import { Player } from '../../types/modelTypes';
import GridView from '../../components/GridView';

interface ChoseOnPositionModalProps {
  open: boolean;
  onClose: (state: boolean) => void;
  avaiablePlayer: Player[] | null;
  addOnPositionHandler: (nr: number, playerId: number) => void;
  currentPosition: number
}
const ChoseOnPositionModal = ({ open, onClose, avaiablePlayer, addOnPositionHandler, currentPosition }: ChoseOnPositionModalProps) => {
  const clickHandler = (playerData: Player) => {
    addOnPositionHandler(currentPosition, playerData.id)
  }
  return (

    <Modal open={open}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center', overflowY: 'scroll', overflowX: 'hidden' }}>
      <Suspense fallback={<div className="w-screen">
        <LinearProgress />
      </div>}>
        <div className='bg-primary-main h-min my-8 mx-8'>
          <GridView playersArray={avaiablePlayer} pickPlayer={clickHandler} cardSize="10px" />
        </div>
      </Suspense>
    </Modal >
  )
}

export default ChoseOnPositionModal