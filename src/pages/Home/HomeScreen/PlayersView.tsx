import React, { useRef, useState, useEffect, forwardRef } from "react";

import { motion, AnimatePresence, useAnimation, useScroll, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer"

import { Typography } from "@mui/material";
import { default as Grid } from '@mui/material/Unstable_Grid2';

import { websiteMockups } from '../../../assets/landing_page/mockups'
import { IClubTheme } from "./types/homeTypes";
import BackgroundHex from "./BackgroundHex";


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
    <section ref={ref} className="relative wh-full" style={{ background: `linear-gradient(180deg, ${clubTheme.colors.main} 0%, #000C15 35%, #000C15 100%)` }
    }>
      <BackgroundHex fillOne="none" strokeColor={clubTheme.colors.main} />
      <Grid ref={viewRef} container className='text-white snap-center'>
        <Grid xxs={5} className='flex-center h-[50vh] w-full'>
          {/* mockup phone image */}
          <motion.img
            initial={{ opacity: 0, x: '200%' }}
            animate={controls}
            variants={slideLeftAnimation(1, 0.5)}
            src={websiteMockups.playersPhone}
            alt="mockup phone"
            className="w-auto h-3/4 "
          />

        </Grid>
        <Grid xxs={7} className='flex-col gap-2 flex-center'>

        </Grid>
        {/* <Grid xxs={7} className='flex-col gap-2 flex-center'>
          <div className="pl-2 border-l-2">
            <p className="text-3xl">Play games</p>
            <p className="text-xl font-semibold ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam dolor facilis odit numquam .</p>
          </div>
        </Grid> */}
        <Grid xxs={7} className='flex-col gap-2 flex-center'>
          <div className="pr-2 text-right border-r-2">
            <p className="text-3xl">Play games</p>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam dolor facilis odit numquam .</p>
          </div>
        </Grid>
        <Grid xxs={5} className=' flex-center h-[50vh]'>
          {/* mockup phone image */}
          <motion.img
            initial={{ opacity: 0, x: '200%' }}
            animate={controls}
            variants={slideLeftAnimation(1, 0.5)}
            src={websiteMockups.playersPhone}
            alt="mockup phone"
            className="w-auto h-3/4"
          />
        </Grid>
      </Grid>
    </section >
  )
})

export default PlayersView

