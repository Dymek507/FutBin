import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import { useMediaQuery } from 'react-responsive';

interface ITextMockupsProps {
  mockups: {
    phone: string,
    tablet: string,
    laptop: string
  }
  direction?: string
}

const Mockups = ({ mockups, direction = 'left' }: ITextMockupsProps) => {
  const isXS = useMediaQuery({ query: '(min-width: 419px)' });
  const isSM = useMediaQuery({ query: '(min-width: 639px)' });
  const isMD = useMediaQuery({ query: '(min-width: 899px)' });
  const isLG = useMediaQuery({ query: '(min-width: 1199px)' });
  const isXL = useMediaQuery({ query: '(min-width: 1535px)' });

  const isPhone = !isXS && !isSM && !isMD && !isLG;
  const isTablet = (isXS || isSM) && (!isMD && !isLG);
  const isPhoneAndTablet = isXS && isSM && isMD && !isLG;
  const isTabletAndLaptop = isXS && isSM && isMD && isLG && !isXL;
  const isAll = isXS && isSM && isMD && isLG && isXL;

  const slideAnimation = () => {
    const posX = direction === 'left' ? '-200%' : '200%';
    return {
      visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
      hidden: { opacity: 0, x: posX, }
    };
  }

  const controls = useAnimation();
  const [viewRef, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div ref={viewRef} className='wh-full flex-center'>
      {(isPhone || isPhoneAndTablet || isAll) &&
        < motion.img
          initial="hidden"
          animate={controls}
          variants={slideAnimation()}
          src={mockups.phone}
          alt="mockup phone"
          className="h-3/4"
        />}
      {(isTablet || isPhoneAndTablet || isTabletAndLaptop || isAll) &&
        <motion.img
          initial="hidden"
          animate={controls}
          variants={slideAnimation()}
          src={mockups.tablet}
          alt="mockup tablet"
          className="w-auto h-3/4"
        />}
      {(isTabletAndLaptop || isAll) &&
        <motion.img
          initial="hidden"
          animate={controls}
          variants={slideAnimation()}
          src={mockups.laptop}
          alt="mockup laptop"
          className="w-auto h-3/4"
        />}
    </div >
  )
}

export default Mockups