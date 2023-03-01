import React from "react";

import { motion } from "framer-motion";
import Card from "../components/Card";
import { Typography } from "@mui/material";
import Animation from "../components/UI/Animation";
import dummyPlayer from "../components/dummyPlayer";

const HomeScreen = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <motion.div
        initial={{ opacity: 0, x: 200, y: 0 }}
        animate={{ opacity: 1, x: 30, y: 0 }}
        exit={{ opacity: 0, x: 0, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Typography variant="h2" sx={{ fontWeight: "300" }}>
          Witamy w
        </Typography>
      </motion.div>

      <Animation />
      <motion.div
        initial={{ opacity: 0, x: -200, y: 0 }}
        animate={{ opacity: 1, x: 100, y: 0 }}
        exit={{ opacity: 0, x: 80, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Card playerData={dummyPlayer} fontSize={"14px"} />
      </motion.div>
    </div>
  );
};

export default HomeScreen;
