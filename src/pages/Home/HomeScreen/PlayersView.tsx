import React, { useRef, useState, useEffect, forwardRef } from "react";

import { motion, AnimatePresence, useAnimation, useScroll, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer"
import Card from "../../../components/Card";
import dummyPlayer from "../../../data/dummyPlayer";
import { Grid, Typography } from "@mui/material";
import Animation from "../Animation";
import { websiteMockups } from '../../../assets/landing_page/mockups'
import { IClubTheme } from "./types/homeTypes";

const slideLeftAnimation = (duration: number, delay: number) => {
  return {
    visible: { opacity: 1, x: 0, transition: { duration, delay } },
    hidden: { opacity: 0, x: '-200%', }
  };
}

interface IPlayersViewProps {
  clubTheme: IClubTheme,
}
const PlayersView = forwardRef<HTMLInputElement, IPlayersViewProps>(({ clubTheme }, ref) => {


  const controls = useAnimation();
  const [viewRef, inView] = useInView()


  useEffect(() => {
    if (inView) {
      controls.start("visible")

    }
  }, [controls, inView])

  return (
    <section ref={ref} className="wh-full " style={{ background: `linear-gradient(180deg, #ddd 0%, #ddd 40%, ${clubTheme.colors.main} 100%)` }}>
      <Grid ref={viewRef} container className='grid w-screen h-screen p-12 text-black snap-center'>
        <Grid item xs={12} className='flex-center '>
          <Typography variant="h1" className="text-6xl font-bold ">
            Play matches with friends!</Typography>
        </Grid>
        <Grid item xs={5} className='relative'>
          <motion.img
            variants={slideLeftAnimation(2, 0)}
            src={websiteMockups.playersPhone}
            animate={controls}
            initial="hidden"
            className="absolute bottom-0 right-0 h-[15em] z-10"
          />
          <motion.img
            variants={slideLeftAnimation(2, 1)}
            src={websiteMockups.playersLaptop}
            animate={controls}
            initial="hidden"
            className="absolute bottom-0 left-0 h-[22em] z-10"
          />
          <motion.img
            variants={slideLeftAnimation(2, 2)}
            src={websiteMockups.playersTablet}
            animate={controls}
            initial="hidden"
            className="absolute bottom-12 right-10 h-[20em]"
          />
        </Grid>
        <Grid item xs={7} className='flex items-center justify-end pr-12 '>
          <Typography variant="h4" className="text-6xl font-bold">
            Win and add results to collect money</Typography>
        </Grid>
      </Grid>
    </section>
  )
})

export default PlayersView

