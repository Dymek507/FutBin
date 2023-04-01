
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import landingPageImages from "../../../../assets/landing_page";
import { appearAnimation, infiniteAnimation, slideAnimationY } from "../Animations";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import LogoSmall from "../ClubView/LogoSmall";
import { clubsData } from "../ClubView/data/clubsData";
import FlipCard from "../../../../components/FlipCard";
import SVGFilter from "./SVGFilter";

const FirstView = () => {
  return (


    <section className='relative h-screen text-xl bg-no-repeat bg-[length:100%_auto] snap-center flex flex-col justify-between items-center bg-[#000C15]'>
      <div className="absolute top-0 bottom-0 bg-bottom bg-cover w-[110vw] " style={{ backgroundImage: `url(${landingPageImages.ocean_background})` }} >
        <div className="absolute bg-bottom top-0 bottom-0 left-[0vw] wh-full bg-cover" style={{
          backgroundImage: `url(${landingPageImages.ocean_background})`,
          filter: 'url("#turbulence")'
        }}>
        </div>
        <SVGFilter />
      </div>
      <div className="absolute inset-[0px] top-52 sm:top-24 bg-no-repeat bg-[length:100%_auto] z-[2]" style={{ backgroundImage: `url(${landingPageImages.island_only_portrait})` }} />

      <motion.p className="absolute text-[4em] md:text-[10em] xl:text-[16em] top-32 text-white  z-[1]" {...slideAnimationY("bottom", 0.3, 0.3, "200%"
      )}>Fut Draft</motion.p>
    </section >
  )
}

export default FirstView