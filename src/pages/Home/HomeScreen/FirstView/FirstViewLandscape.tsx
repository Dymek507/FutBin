
import React, { forwardRef } from "react";

import { motion } from "framer-motion";
import landingPageImages from "../../../../assets/landing_page";
import { appearAnimation, slideAnimationX } from "../Animations";

import SVGFilter from "./SVGFilter";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import { SectionRefType } from "../types/homeTypes";

interface IFirstViewProps {
  scrollTo: (sectionRef: SectionRefType) => void;
}

const FirstView = forwardRef<HTMLInputElement, IFirstViewProps>(({ scrollTo }, ref) => {
  return (
    <section ref={ref} className='relative h-screen text-xl bg-no-repeat snap-center flex bg-[#000C15]'>
      {/* Background ocean */}
      <div className="bg-bottom bg-cover wh-full " style={{ backgroundImage: `url(${landingPageImages.ocean_background})` }} >
        <div className="absolute bg-bottom top-0 bottom-0 left-[0vw] wh-full bg-cover" style={{
          backgroundImage: `url(${landingPageImages.ocean_background})`,
          filter: 'url("#turbulence")'
        }} />
        <SVGFilter />
      </div>
      {/* Background island */}
      <div className="absolute inset-0 -left-32 md:-left-54 lg:left-0 xl:left-10 bg-no-repeat bg-[length:auto_90%] z-[1]" style={{ backgroundImage: `url(${landingPageImages.island_only_landscape})` }} />
      <div className="absolute flex items-center justify-end w-full wh-full">
        {/* Text and button */}
        <div className="flex flex-col items-center gap-12 mr-32">
          <motion.p className="self-end leading-none text-[2em] md:text-[6em] xl:text-[8em] text-white font-semibold" {...slideAnimationX("left", 0.3
          )}>Fut Draft</motion.p>
          <motion.div className="flex flex-col items-center gap-4" {...appearAnimation(0.6, 1.2)}>
            <button className="text-white normal-case text-xl rounded-none w-fit btn btn-outline hover:bg-white z-[1] pb-1"
            >
              <Link to="/new-packs">
                Open App
              </Link>
            </button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full mb-8 flex-center z-[2]">
        <ArrowBackIosIcon onClick={() => scrollTo("club")} className="text-white -rotate-90" fontSize="large" />
      </div>
    </section >

  )
})

export default FirstView