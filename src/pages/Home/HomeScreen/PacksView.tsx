import React, { useRef, useState, useEffect, forwardRef } from "react";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import { Grid, Typography } from "@mui/material";
import { fifaPlay, websiteMockups } from "../../../assets/landing_page/mockups/index";
import { IClubTheme } from "./types/homeTypes";


interface IPacksViewProps {
  clubTheme: IClubTheme,
}
const PacksView = forwardRef<HTMLInputElement, IPacksViewProps>(({ clubTheme }, ref) => {

  const controls = useAnimation();
  // const [ref, inView] = useInView()

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible")
  //   }
  // }, [controls, inView])

  return (
    <section ref={ref} className="wh-full" style={{ background: `linear-gradient(180deg, ${clubTheme.colors.main} 0%, #ddd 80%, #ddd 100%)` }}>
      <Grid container className='grid w-screen h-screen p-12 text-black snap-center'>
        <Grid item xs={12} className='flex-center'>
          <Typography variant="h1" className="text-6xl font-bold">
            Play matches with friends!</Typography>
        </Grid>
        <Grid item xs={5} className='self-center h-[50vh]'>
          <div className="relative h-[30em] bg-no-repeat" style={{ backgroundImage: `url(${websiteMockups.tvMockup}` }}>
            <div className="absolute w-[566px] h-[320px] left-[19px] top-[24px] ">
              <img src={fifaPlay} alt="fifa_play" className="wh-full" />
            </div>
          </div>
        </Grid>
        <Grid item xs={7} className='flex items-center justify-end pr-12 '>
          <Typography variant="h4" className="text-6xl font-bold">
            "Get ready to draft your dream team with FutDraft! Our app lets you draw packs, sell and exchange players, and build your ultimate squad. With our easy-to-use interface and comprehensive database of players, you'll be able to create a team that will take on any challenge."</Typography>
        </Grid>
      </Grid>




    </section>
  )
})

export default PacksView
