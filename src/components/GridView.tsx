import { Grid } from '@mui/material'
import React, { Suspense, lazy } from 'react'
import { Player } from '../modules/modelTypes'
// import Card from './Card';

interface GridViewProps {
  playersArray: Player[] | null;
  pickPlayer: (player: Player) => void;
  pickedPlayers?: Player[];
  cardSize?: string;
  xxs?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Card = lazy(() => import('./Card'))

const GridView = ({ playersArray, pickPlayer, pickedPlayers, cardSize = '12px', xxs = 12, xs = 6, sm = 4, md = 3, lg = 2, xl = 1.5, }: GridViewProps) => {
  return (
    <div className="h-fit mt-8">
      {playersArray &&
        <Grid
          sx={{ p: "1rem", width: "94vw" }}
          container
          alignItems="flex-start"
          rowSpacing={1}
        >
          {playersArray?.map((player) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              key={player.id}
              item
              xxs={xxs}
              xs={xs}
              sm={sm}
              md={md}
              lg={lg}
              xl={xl}
            >


              <Card
                playerData={player}
                sendPlayer={pickPlayer}
                fontSize={cardSize}
                pickedArray={pickedPlayers}
              />

            </Grid>
          ))}
        </Grid>
      }
    </div>
  )
}

export default GridView