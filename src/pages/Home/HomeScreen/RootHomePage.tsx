import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useInView, useSpring, useTransform } from "framer-motion";
import SecondView from "./SecondView";
import MenuIcon from '@mui/icons-material/Menu';

import ball from "../../../assets/landing_page/ball.png";
import MockupView from "./MockupView";
import ClubView from "./ClubView/ClubView";
import FirstViewPortrait from "./FirstView/FirstViewPortrait";
import FirstViewLandscape from "./FirstView/FirstViewLandscape";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import HomeNavigation from "./HomeNavigation/HomeNavigation";
import LeftBar from "./LeftBar";



const HomeScreen = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" },);

  return (
    <main className="relative h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory" >
      <LeftBar currentPage={4} />
      <div className="fixed flex justify-end w-full pr-8 z-[5] text-white ">
        {isPortrait ? (
          // {isMobile && isPortrait ? (
          <div className="text-[2em] m-[0.2em]">
            <MenuIcon fontSize="inherit" />
          </div>) :
          <HomeNavigation />
        }
      </div >
      {isPortrait ? <FirstViewPortrait /> : <FirstViewLandscape />}
      {/* {isMobile ? <FirstViewPortrait /> : <FirstViewLandscape />} */}
      <ClubView />
      <SecondView />
      <MockupView />
    </main>


  );
};

export default HomeScreen;

