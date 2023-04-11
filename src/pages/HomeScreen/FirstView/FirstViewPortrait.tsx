import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import landingPageImages from "../../../assets/landing_page/first_page";
import { slideAnimationY } from "../Animations";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SectionRefType } from "../types/homeTypes";
import BackgroundWater from "./BackgroundWater";
import ButtonMotion from "./ButtonMotion";

interface IFirstViewProps {
  scrollTo: (sectionRef: SectionRefType) => void;
}
const FirstViewPortrait = forwardRef<HTMLInputElement, IFirstViewProps>(({ scrollTo }, ref) => {
  const { island_only_portrait: portraitImg } = landingPageImages;
  return (
    <section ref={ref} className='relative h-screen text-xl xs:text-2xl bg-no-repeat snap-center flex bg-[#000C15] text-white'>
      {/* Background image */}
      <BackgroundWater />
      {/* Main content */}
      <main className="absolute inset-0 flex flex-col items-center w-full overflow-x-hidden">
        {/* Text */}
        <motion.p className="text-[3em] font-semibold leading-none z-[0] mt-10" {...slideAnimationY("bottom", 0.5, 0, "200%")}>Fut Draft</motion.p>
        {/* Island picture which changes according to orientation */}
        <img className="z-[1] " src={portraitImg} alt="Island" />
        {/* Button */}
        <ButtonMotion />
        <ExpandMoreIcon className="cursor-pointer" onClick={() => scrollTo("team")} sx={{ fontSize: "6rem" }} />
      </main>
    </section >

  )
})

export default FirstViewPortrait