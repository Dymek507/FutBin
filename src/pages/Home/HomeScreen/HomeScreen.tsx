// @ts-nocheck
import React, { useRef, useState, useEffect } from "react";

import { motion, AnimatePresence, useScroll, useInView, useSpring, useTransform } from "framer-motion";
import Card from "../../../components/Card";
import dummyPlayer from "../../../data/dummyPlayer";

import landingPageImages from "../../../assets/landing_page";
import FirstView from "./FirstView";
import SecondView from "./SecondView";
import { appearAnimation, slideAnimation } from "./Animations";
import ThirdView from "./ThirdView";



const HomeScreen = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const y = useTransform(scrollYProgress, latest => latest * 200)


  const slideRightAnimation = slideAnimation(1, 2);
  const slideLeftAnimation = slideAnimation(-1, 4);




  return (
    <div className="relative w-full overflow-x-hidden bg-[#1b1c53] ">
      <section className="fixed box-content inset-0 border-2 h-[80vh] mt-[10vh] w-6 ml-6 z-[10] rounded-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute top-0 left-0 bg-white h-6 w-6 z-[10] rounded-full" style={{ top: y || 0 }} />
        {/* className="absolute  inset-0 bg-white h-12 w-12 z-[10] rounded-full" /> */}
      </section>
      <FirstView />

      <SecondView />
      <ThirdView />
    </div>


  );
};

export default HomeScreen;

