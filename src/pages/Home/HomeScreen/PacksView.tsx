import React, { useRef, useState, useEffect, forwardRef } from "react";


import { Typography } from "@mui/material";
import { default as Grid } from '@mui/material/Unstable_Grid2';

import { packsMockups, tvMockup } from '../../../assets/landing_page/mockups'
import { IClubTheme } from "./types/homeTypes";
import { useMediaQuery } from "react-responsive";
import Mockups from "./Mockups";
import TextMockups from "./TextMockups";




interface IPacksViewProps {
  clubTheme: IClubTheme,
  isMobile: boolean
}
const PacksView = forwardRef<HTMLInputElement, IPacksViewProps>(({ clubTheme, isMobile }, ref) => {


  return (
    < section ref={ref} className="relative wh-full" style={{ background: `#065C6B` }
    }>
      <Grid container className='p-2 text-xs text-white snap-center'>
        <Grid xxs={12} sm={8} className='flex-center h-[40vh] sm-[50vh]'>
          <img className="max-h-full h-3/4 xs:h-full" src={tvMockup} alt="" />
        </Grid>
        <Grid xxs={12} sm={4} className='flex-col gap-2 mx-4 sm:mx-0 flex-center'>
          <TextMockups title="Play matches">
            Play matches with your friends and earn coins by recording the results of each game. Whether you win or lose, you can accumulate rewards as you compete against one another.
          </TextMockups>
        </Grid>
        <Grid xxs={6} md={4} className='flex-col gap-2 flex-center'>
          <TextMockups title="Buy packs" direction="right">
            Use your earned coins to purchase packs of your choice, tailored to your budget. With various types of packs available, you can choose the ones that suit your preferences and your wallet.
          </TextMockups>
        </Grid>
        <Grid xxs={6} md={8} className=' flex-center h-[50vh]'>
          <Mockups mockups={packsMockups} direction="right" />
        </Grid>
      </Grid>
    </section >
  )
})

export default PacksView

