
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import landingPageImages from "../../../../assets/landing_page";
import { appearAnimation, infiniteAnimation, slideAnimationX } from "../Animations";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import LogoSmall from "../ClubView/LogoSmall";
import { clubsData } from "../ClubView/data/clubsData";
import FlipCard from "../../../../components/FlipCard";
import SVGFilter from "./SVGFilter";

const FirstView = () => {

  return (

    <section className='relative h-screen text-xl bg-no-repeat bg-[length:100%_auto] snap-center flex flex-col justify-between items-center bg-[#000C15]'>
      <div className="bg-bottom bg-cover wh-full " style={{ backgroundImage: `url(${landingPageImages.ocean_background})` }} >
        <div className="absolute bg-bottom top-0 bottom-0 left-[0vw] wh-full bg-cover" style={{
          backgroundImage: `url(${landingPageImages.ocean_background})`,
          filter: 'url("#turbulence")'
        }}>
        </div>
        <SVGFilter />


      </div>
      <div className="absolute inset-0 -left-32 md:-left-54 lg:left-0 xl:left-10 bg-no-repeat bg-[length:auto_90%] z-[1]" style={{ backgroundImage: `url(${landingPageImages.island_only_landscape})` }} />
      {/* <motion.p className="absolute text-[4em] md:text-[10em] xl:text-[16em] top-[1.3em]  md:bottom-[50%] text-black" {...appearAnimation(3, 0.3
      )}>Fut Draft</motion.p> */}
      <motion.p className="absolute text-[4em] md:text-[10em] xl:text-[16em] right-52 top-72 text-white font-semibold" {...slideAnimationX("left", 0.3
      )}>Fut</motion.p>
      <motion.p className="absolute text-[4em] md:text-[10em] xl:text-[16em] right-52  bottom-72 text-white font-semibold" {...slideAnimationX("right", 0.3
      )}>Draft</motion.p>

    </section >

  )
}

export default FirstView