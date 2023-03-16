import { Grid, LinearProgress, Modal } from '@mui/material'
import React, { Suspense } from 'react'
import { useAppSelector } from '../../store/app/hooks'
import { Player } from '../../modules/modelTypes';
import Card from '../../components/Card'
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
      sx={{ display: 'flex', justifyContent: 'center' }}>
      <Suspense fallback={<div className="w-screen">
        <LinearProgress />
      </div>}>
        <div className='bg-primary-main overflow-y-scroll mx-4'>

          <GridView playersArray={avaiablePlayer} pickPlayer={clickHandler} cardSize="10px" />
        </div>
      </Suspense>
    </Modal >
  )
}

export default ChoseOnPositionModal