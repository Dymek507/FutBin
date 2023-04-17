import React, { forwardRef } from "react";
import { default as Grid } from '@mui/material/Unstable_Grid2';
import { openingMockups, playersMockups } from '../../../assets/landing_page/mockups'
import { IClubTheme } from "../helpers/types/homeTypes";
import Mockups from "./helpers/Mockups";
import TextMockups from "./helpers/TextMockups";




interface IPlayersViewProps {
  clubTheme: IClubTheme,
  isMobile: boolean
}
const PlayersView = forwardRef<HTMLInputElement, IPlayersViewProps>(({ clubTheme, isMobile }, ref) => {


  return (

    < section ref={ref} className="relative wh-full " style={{ background: `#065C6B` }
    }>
      <Grid container className='text-sm text-white snap-center wh-full' >
        <Grid xxs={6} md={7} lg={9} className='h-1/2'>
          <Mockups mockups={openingMockups} />
        </Grid>
        <Grid xxs={6} md={5} lg={3} className='flex-col gap-2 flex-center'>
          <TextMockups title="Open packs">
            Open a pack of 8 players. Probability of getting higher-rated players depending on the price of the pack. Additionally, an opening animation will be displayed when you get a player with a rating of 82 or higher.
          </TextMockups>
        </Grid>
        <Grid xxs={6} md={5} lg={3} className='flex-col gap-2 flex-center'>
          <TextMockups title="Manage team" direction="right">
            Take control of your players and manage your team with ease. Move your best players to the first team or sell them to earn coins and invest in more packs, helping you to build a stronger squad.
          </TextMockups>
        </Grid>
        <Grid xxs={6} md={7} lg={9} className='h-1/2'>
          <Mockups mockups={playersMockups} direction="right" />
        </Grid>
      </Grid >
    </section >
  )
})

export default PlayersView

