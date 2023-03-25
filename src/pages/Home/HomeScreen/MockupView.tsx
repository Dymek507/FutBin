import React, { useRef, useState, useEffect } from "react";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import Card from "../../../components/Card";
import dummyPlayer from "../../../data/dummyPlayer";
import { Grid, Typography } from "@mui/material";
import Animation from "../Animation";
import { playersMockups } from '../../../assets/landing_page/mockups'

const slideLeftAnimation = (duration: number, delay: number) => {
  return {
    visible: { opacity: 1, x: 0, transition: { duration, delay } },
    hidden: { opacity: 0, x: '-200%', }
  };
}
const slideRightVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 4 } },
  hidden: { opacity: 0, scale: 0, x: '100%' }
};

const MockupView = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <Grid ref={ref} container className='grid w-screen h-screen p-12 text-white'>
      <Grid item xs={12} className='flex-center '>
        <Typography variant="h1" className="text-6xl font-bold ">
          Play matches with friends!</Typography>
      </Grid>
      <Grid item xs={5} className='relative'>
        <motion.img
          variants={slideLeftAnimation(2, 0)}
          src={playersMockups.playersPhone}
          animate={controls}
          initial="hidden"
          className="absolute bottom-0 right-0 h-[15em] z-10"
        >
        </motion.img>
        <motion.img
          variants={slideLeftAnimation(2, 1)}
          src={playersMockups.playersLaptop}
          animate={controls}
          initial="hidden"
          className="absolute bottom-0 left-0 h-[22em] z-10"
        >
        </motion.img>
        <motion.img
          variants={slideLeftAnimation(2, 2)}
          src={playersMockups.playersTablet}
          animate={controls}
          initial="hidden"
          className="absolute bottom-12 right-10 h-[20em]"
        >
        </motion.img>
      </Grid>
      <Grid item xs={7} className='flex items-center justify-end pr-12 '>
        <Typography variant="h4" className="text-6xl font-bold">
          Win and add results to collect money</Typography>
      </Grid>
    </Grid>




  )
}

export default MockupView

// {/* <Animation /> */ }
// {/* <motion.div
//         variants={slideRightVariant}
//         animate={controls}
//         initial="hidden"
//         className="self-center h-1/3"
//       >
//         <Card playerData={dummyPlayer} fontSize={"14px"} />
//       </motion.div > */}

