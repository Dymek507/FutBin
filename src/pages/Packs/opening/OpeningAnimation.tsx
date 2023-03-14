import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LinearProgress } from "@mui/material";

type OpeningAnimationProps = {
  isVisible: boolean,
  progress: number
}

const OpeningAnimation = ({ isVisible, progress }: OpeningAnimationProps) => {
  return (
    <div className="absolute w-full h-screen overflow-hidden z-[40]">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              key="openingtop"
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: "-70vh" }}
              transition={{ duration: 2 }}
            >
              <div className="flex justify-center items-end bg-[url('/src/assets/opening/MetalPattern.svg')] bg-black bg-no-repeat bg-cover bg-bottom h-[50vh]">
                <div className="text-[6em] lg:text-[16em] mb-1 font-effect-neon">Fut</div>
              </div>


              {progress < 75 ? <LinearProgress variant="determinate" value={progress} /> : <LinearProgress variant="determinate" value={100} />}
            </motion.div>
            <motion.div
              key="openingbottom"
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: "70vh" }}
              transition={{ duration: 2 }}
            >
              <div className="flex justify-center items-start  bg-[url('/src/assets/opening/MetalPattern.svg')] bg-black bg-no-repeat bg-cover bg-top h-[50vh] ">
                <div className="text-[6em] lg:text-[16em] mb-1 font-effect-neon">Draft</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OpeningAnimation;
