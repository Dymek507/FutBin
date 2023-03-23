// @ts-nocheck
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import landingPageImages from "../../../assets/landing_page";
import { appearAnimation, infiniteAnimation, slideAnimation } from "./Animations";
import { Link } from "react-router-dom";
import ball from "../../../assets/landing_page/ball.png";


const bouncingAnimation = {
  initial: {
    y: 0,
  },
  animate: {
    y: [0, -120, 0],
    transition: {
      duration: 1,
      delay: 1,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
// const bouncingAnimation = {
//   initial: {
//     y: -500,
//     transition: {
//       duration: 4,
//     }
//   },
//   animate: {
//     y: 0,
//     transition: {
//       duration: 1,
//       delay: 4,
//     },
//   },
// };

const FirstView = () => {

  const slideRightAnimation = slideAnimation(1, 2);
  const slideLeftAnimation = slideAnimation(-1, 4);

  return (
    <div>
      <div className='relative h-screen overflow-x-hidden flex-center' style={{ background: 'linear-gradient(215deg,rgba(229, 0, 0, 1) 0%,rgba(132, 0, 0, 1) 35%,rgba(0, 36, 108, 1) 70%,rgba(0, 77, 231, 1) 100%)' }}>
        <div className="self-start flex justify-end w-full mr-4   z-[5]">
          <nav className="p-4 text-2xl text-white">
            <ul className="flex flex-row gap-5">
              <Link to="/my-players">

                <li className="border-b-2">Play matches</li>
              </Link>
              <li>Buy packs</li>
              <li>Draw players</li>
              <li>Assembly squad</li>
            </ul>
          </nav>
        </div>
        {/* Outlined text */}
        {/* <motion.svg
          viewBox="0 0 450 50" className="absolute"
          {...infiniteAnimation}
        >
          <text y="130">Fut Draft</text>
        </motion.svg> */}
        <motion.img className="absolute inset-0 object-fill wh-full" src={landingPageImages.mist_1} alt="mist" />
        <motion.img className="absolute inset-[50%, 50%] object-fill z-[2]" src={landingPageImages.mist_2} alt="mist" />
        <motion.img className="absolute bottom-0 object-fill z-[4]" src={landingPageImages.mist_3} alt="mist" />
        {/* Normal text */}
        <motion.p {...appearAnimation(3, 0.3
        )} className="absolute text-[20rem] inset-[50%, 50%] text-white" >Fut Draft</motion.p>
        <motion.img className="absolute inset-[50%, 50%] h-full z-[3]" src={landingPageImages.lewandowski} alt="lewandowski_photo"
        />
        <motion.img {...bouncingAnimation} src={ball} className="absolute bottom-0 left-64 bg-white h-32 w-32 z-[10] rounded-full" />
      </div>
    </div>
  )
}

export default FirstView