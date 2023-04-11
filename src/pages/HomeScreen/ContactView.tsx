import React, { forwardRef } from "react";

import { default as Grid } from '@mui/material/Unstable_Grid2';

import { openingMockups, playersMockups } from '../../assets/landing_page/mockups'
import { IClubTheme } from "./types/homeTypes";
import { useMediaQuery } from "react-responsive";
import Mockups from "./Mockups";
import TextMockups from "./TextMockups";




interface IPlayersViewProps {
  clubTheme: IClubTheme,
  isMobile: boolean
}
const PlayersView = forwardRef<HTMLInputElement, IPlayersViewProps>(({ clubTheme, isMobile }, ref) => {


  return (
    < section ref={ref} className="relative wh-full" style={{ background: `#065C6B` }
    }>
      <Grid container className='text-sm text-white snap-center'>
        <Grid xxs={12} className='flex-center h-[50vh]'>
          <p>Download CV</p>
        </Grid>
        <Grid xxs={12} className='flex-center h-[50vh] bg-slate-700'>
          <p>Copyright</p>
        </Grid>
      </Grid>
    </section >
  )
})

export default PlayersView

