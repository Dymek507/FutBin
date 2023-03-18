import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Card from "../../components/Card";
import { Typography } from "@mui/material";
import Animation from "./Animation";
import dummyPlayer from "../../data/dummyPlayer";

const slideAnimation = (direction: 1 | -1) => {
  return {
    initial: {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
};

const HomeScreen = () => {
  const slideInAnimation = slideAnimation(1);
  const slideOutAnimation = slideAnimation(-1);
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <motion.div {...slideInAnimation}>
        <Typography variant="h2" sx={{ fontWeight: "300" }}>
          Witamy w
        </Typography>
      </motion.div>
      <Animation />
      <motion.div {...slideOutAnimation}>
        <Card playerData={dummyPlayer} fontSize={"14px"} />
      </motion.div>
    </div>
  );
};

export default HomeScreen;
