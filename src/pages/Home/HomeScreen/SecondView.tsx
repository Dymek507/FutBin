import React, { useRef, useState, useEffect } from "react";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import Card from "../../../components/Card";
import dummyPlayer from "../../../data/dummyPlayer";
import { Grid, Typography } from "@mui/material";
import Animation from "../Animation";
import monitorGame from '../../../assets/landing_page/monitor_game_1.png'

const slideLeftVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 2, delay: 1 } },
  hidden: { opacity: 0, scale: 0, x: '-100%' }
};
const slideRightVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 4 } },
  hidden: { opacity: 0, scale: 0, x: '100%' }
};

const SecondView = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <Grid ref={ref} container className='grid w-screen h-screen p-12 text-black bg-gray-200'>
      <Grid item xs={12} className='flex-center '>
        <Typography variant="h1" className="text-6xl font-bold ">
          Play matches with friends!</Typography>
      </Grid>
      <Grid item xs={5} className='self-center'>
        <motion.img
          variants={slideLeftVariant}
          src={monitorGame}
          animate={controls}
          initial="hidden"
          className="h-1/2"
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

export default SecondView

// {/* <Animation /> */ }
// {/* <motion.div
//         variants={slideRightVariant}
//         animate={controls}
//         initial="hidden"
//         className="self-center h-1/3"
//       >
//         <Card playerData={dummyPlayer} fontSize={"14px"} />
//       </motion.div > */}

