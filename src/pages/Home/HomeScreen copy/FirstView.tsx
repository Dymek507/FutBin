// @ts-nocheck
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import landingPageImages from "../../../assets/landing_page";
import { appearAnimation, infiniteAnimation, slideAnimation } from "./Animations";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MenuIcon from '@mui/icons-material/Menu';

const FirstView = () => {

  const slideRightAnimation = slideAnimation(1, 2);
  const slideLeftAnimation = slideAnimation(-1, 4);

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })

  return (

    <section className='relative h-screen text-2xl snap-center flex-center' >
      {/* <section className='relative h-screen text-2xl snap-center flex-center' style={{ background: 'linear-gradient(235deg,rgba(229, 0, 0, 1) 0%,rgba(132, 0, 0, 1) 35%,rgba(0, 36, 108, 1) 70%,rgba(0, 77, 231, 1) 100%)' }}> */}
      <div className="self-start flex justify-end w-full z-[5]">
        {isMobile ? (
          <div className="text-[2em] m-[0.2em]">
            <MenuIcon fontSize="inherit" />
          </div>) : (
          <nav className="p-4 text-2xl text-white">
            <ul className="flex flex-row gap-5">
              <Link to="/my-players">
                <li className="border-b-2">Play matches</li>
              </Link>
              <li>Buy packs</li>
              <li>Draw players</li>
              <li>Assembly squad</li>
            </ul >
          </nav >
        )}
      </div >
      {/* <motion.img className="absolute inset-0 object-fill wh-full" src={landingPageImages.mist_1} alt="mist" />
      <motion.img className="absolute inset-[50%, 50%] object-fill z-[2]" src={landingPageImages.mist_2} alt="mist" />
      <motion.img className="absolute bottom-0 object-fill z-[4]" src={landingPageImages.mist_3} alt="mist" /> */}
      {/* Normal text */}
      <motion.p {...appearAnimation(3, 0.3
      )} className="absolute text-[4em] md:text-[10em] xl:text-[16em] bottom-[1.5em] top-auto md:bottom-[50%] text-white z-[2]" >Fut Draft</motion.p>
      <motion.img className="absolute inset-[50%, 50%] h-full z-[3]" src={landingPageImages.lewandowski} alt="lewandowski_photo"
      />

    </section >
  )
}

export default FirstView