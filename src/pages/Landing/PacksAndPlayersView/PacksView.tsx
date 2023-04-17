import React, { forwardRef } from "react";
import { default as Grid } from '@mui/material/Unstable_Grid2';
import { packsMockups, tvMockup } from '../../../assets/landing_page/mockups'
import { IClubTheme } from "../helpers/types/homeTypes";
import Mockups from "./helpers/Mockups";
import TextMockups from "./helpers/TextMockups";




interface IPacksViewProps {
  clubTheme: IClubTheme,
  isMobile: boolean
}
const PacksView = forwardRef<HTMLInputElement, IPacksViewProps>(({ clubTheme, isMobile }, ref) => {


  return (
    <section ref={ref} className="wh-full" style={{ background: `#065C6B` }
    }>
      <Grid container className='text-xs text-white wh-full snap-center '>
        <Grid xxs={12} sm={8} md={5} className='flex-center'>
          <img className="w-1/2 max-h-full " src={tvMockup} alt="" />
        </Grid>
        <Grid xxs={12} sm={4} md={7} className='flex flex-col justify-center gap-2 mx-4 align-end sm:mx-0'>
          <TextMockups title="Play matches">
            Play matches with your friends and earn coins by recording the results of each game. Whether you win or lose, you can accumulate rewards as you compete against one another.
          </TextMockups>
        </Grid>
        <Grid xxs={6} md={5} lg={3} className='flex-col gap-2 flex-center'>
          <TextMockups title="Buy packs" direction="right">
            Use your earned coins to purchase packs of your choice, tailored to your budget. With various types of packs available, you can choose the ones that suit your preferences and your wallet.
          </TextMockups>
        </Grid>
        <Grid xxs={6} md={7} lg={9} className='h-1/2'>
          <Mockups mockups={packsMockups} direction="right" />
        </Grid>
      </Grid>
    </section >
  )
})

export default PacksView

