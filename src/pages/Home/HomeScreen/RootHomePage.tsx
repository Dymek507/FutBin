import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useInView, useSpring, useTransform } from "framer-motion";
import FirstView from "./FirstView";
import SecondView from "./SecondView";
import { appearAnimation, slideAnimation } from "./Animations";

import ball from "../../../assets/landing_page/ball.png";
import MockupView from "./MockupView";
import ClubView from "./ClubView/ClubView";



const HomeScreen = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 700]);


  const slideRightAnimation = slideAnimation(1, 2);
  const slideLeftAnimation = slideAnimation(-1, 4);

  return (
    <main className="relative w-screen h-screen overflow-x-hidden bg-[#1b1c53] overflow-y-scroll snap-y snap-mandatory bg-gradient-to-tr from-sky-700 to-slate-500">
      {/* <div className="fixed box-content inset-0 h-[80vh] mt-[10vh] w-6 ml-6 z-[10] rounded-full">
        <motion.img
          src={ball}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute top-0 left-0 bg-white h-6 w-6 z-[10] rounded-full" style={{ y }} />
      </div> */}
      <FirstView />
      <ClubView />
      <SecondView />
      <MockupView />
    </main>


  );
};

export default HomeScreen;

