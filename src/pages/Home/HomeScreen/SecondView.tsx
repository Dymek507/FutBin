// @ts-nocheck
import React, { useRef, useState } from "react";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Card from "../../../components/Card";
import dummyPlayer from "../../../data/dummyPlayer";
import { Typography } from "@mui/material";
import Animation from "../Animation";


const SecondView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className='w-screen h-screen flex flex-col justify-center items-center'>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "300" }}>
          Witamy w
        </Typography>
      </div>
      <Animation />
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <Card playerData={dummyPlayer} fontSize={"14px"} />
      </div> </div>
  )
}

export default SecondView

