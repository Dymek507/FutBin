
import React, { useRef, useState, useEffect } from "react";

import { motion, AnimatePresence, useScroll, useInView, useSpring, useTransform } from "framer-motion";
import FirstView from "./FirstView";
import SecondView from "./SecondView";
import { appearAnimation, slideAnimation } from "./Animations";
import ChoseClubView from "./ChoseClubView";

import ball from "../../../assets/landing_page/ball.png";
import MockupView from "./MockupView";



const HomeScreen = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 700]);


  const slideRightAnimation = slideAnimation(1, 2);
  const slideLeftAnimation = slideAnimation(-1, 4);

  return (
    <section className="relative w-full overflow-x-hidden bg-[#1b1c53] ">
      {/* <section className="fixed box-content inset-0 border-2 h-[80vh] mt-[10vh] w-6 ml-6 z-[10] rounded-full"> */}
      <div className="fixed box-content inset-0 h-[80vh] mt-[10vh] w-6 ml-6 z-[10] rounded-full">
        <motion.img
          src={ball}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute top-0 left-0 bg-white h-6 w-6 z-[10] rounded-full" style={{ y }} />
        {/* className="absolute  inset-0 bg-white h-12 w-12 z-[10] rounded-full" /> */}
      </div>
      <FirstView />
      <ChoseClubView />
      <SecondView />
      <MockupView />
    </section>


  );
};

export default HomeScreen;

