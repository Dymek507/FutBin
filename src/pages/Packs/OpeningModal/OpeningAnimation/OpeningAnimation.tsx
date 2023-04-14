import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { LinearProgress } from "@mui/material";

import styles from "./OpeningAnimation.module.css";

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
              className="relative"
            >
              <div className="flex justify-center items-end bg-[url('/src/assets/opening/MetalPattern.svg')] bg-black bg-no-repeat bg-cover bg-bottom h-[50vh] brightness-50">
              </div>
              <div className="absolute flex justify-center items-end inset-0 text-[6em] sm:text-[10em] lg:text-[16em] mb-1 text-white">
                {/* <p className=''>Fut</p></div> */}
                <p className={styles.textPop}>Fut</p></div>
              {progress < 75 ? <LinearProgress variant="determinate" value={progress} /> : <LinearProgress variant="determinate" value={100} />}
            </motion.div>
            <motion.div
              key="openingbottom"
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: "70vh" }}
              transition={{ duration: 2 }}
              className='relative'
            >
              <div className="flex justify-center items-start bg-[url('/src/assets/opening/MetalPattern.svg')] pos bg-black bg-no-repeat bg-cover bg-top h-[50vh] brightness-[0.7] -scale-y-100 rotate-180" >
              </div>
              <div className="absolute flex justify-center inset-0 text-[6em] sm:text-[10em] lg:text-[16em] mb-1"><p className={styles.textPop}>Draft</p></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OpeningAnimation;
