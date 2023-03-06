import { Grid, Modal } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../store/app/hooks'
import { Player } from '../../modules/modelTypes';
import Card from '../../components/Card'

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
      sx={{ overflowY: 'scroll', display: 'flex', justifyContent: 'center' }}>
      <div className='flex justify-start items-center flex-col h-full w-[90%]'>

        <Grid
          container
          rowSpacing={0}
          columnSpacing={0}
          className='mt-4 bg-main'
        >
          {avaiablePlayer?.map((player) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={player.id}
              item
              xs={6}
              sm={4}
              md={2}
              lg={2}
              xl={2}
            >
              <Card
                playerData={player}
                sendPlayer={clickHandler}
                fontSize={"8px"}
              // pickedArray={pickedPlayers}
              />
            </Grid>
          ))}
        </Grid>
        {/* </div> */}
      </div>
    </Modal >
  )
}

export default ChoseOnPositionModal