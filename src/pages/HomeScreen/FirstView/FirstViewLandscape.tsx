import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import landingPageImages from "../../../assets/landing_page/first_page";
import { slideAnimationX } from "../Animations";


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { SectionRefType } from "../types/homeTypes";
import { useMediaQuery } from "react-responsive";
import BackgroundWater from "./BackgroundWater";
import ButtonMotion from "./ButtonMotion";

interface IFirstViewProps {
  scrollTo: (sectionRef: SectionRefType) => void;
}

const FirstViewPortrait = forwardRef<HTMLInputElement, IFirstViewProps>(({ scrollTo }, ref) => {
  const { island_only_landscape: landscapeImg } = landingPageImages;
  return (
    <section ref={ref} className='relative h-screen text-xl xs:text-2xl bg-no-repeat snap-center flex bg-[#000C15] text-white '>
      {/* Background image */}
      <BackgroundWater />
      {/* Main content */}
      <main className="absolute inset-0 flex flex-col items-center w-full overflow-hidden md:flex-row">
        {/* Island picture which changes according to orientation */}
        <img className="z-[1] h-2/3 md:h-3/4 lg:h-5/6 self-start" src={landscapeImg} alt="Island" />
        <div className="flex flex-col justify-center gap-8 text-center grow align-center md:mr-6">
          {/* Text */}
          <motion.p className="text-[4em] md:text-[3em] lg:text-[5em] xl:text-[8em] font-semibold leading-none z-[0]" {...slideAnimationX("left", 0.3)}>Fut Draft</motion.p>
          {/* Button */}
          <ButtonMotion />
        </div>
        <div className="absolute bottom-0 left-0 w-screen flex-center">
          <ExpandMoreIcon className="cursor-pointer" onClick={() => scrollTo("team")} sx={{ fontSize: "6rem" }} />
        </div>
      </main>
    </section >
  )
})
export default FirstViewPortrait