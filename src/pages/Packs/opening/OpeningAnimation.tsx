import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import cutImg from "../../assets/opening/cut_effect.png";

type OpeningAnimationProps = {
  isVisible: boolean
}

const OpeningAnimation = ({ isVisible }: OpeningAnimationProps) => {
  return (
    <div className="absolute w-full h-screen overflow-hidden z-[40]">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              key="openingtop"
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: "-50vh" }}
              transition={{ duration: "2" }}
            >
              <div className="flex justify-center items-end bg-black bg-opening-1 bg-no-repeat bg-cover bg-bottom h-[50vh]">
                <div className="text-8xl mb-2 text-white">Fut</div>
              </div>
            </motion.div>
            <motion.div
              key="openingbottom"
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: "50vh" }}
              transition={{ duration: 2 }}
            >
              <div className="flex justify-center items-start bg-black bg-opening-2 bg-no-repeat bg-cover bg-top h-[50vh] ">
                <div className="text-8xl mb-2 text-white">Draft</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OpeningAnimation;
