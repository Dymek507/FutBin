import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useInView, useSpring, useTransform, useMotionValue, useMotionValueEvent } from "framer-motion";
import PacksView from "./PacksView";
import MenuIcon from '@mui/icons-material/Menu';
import PlayersView from "./PlayersView";
import ClubView from "./ClubView/ClubView";
import FirstViewPortrait from "./FirstView/FirstViewPortrait";
import FirstViewLandscape from "./FirstView/FirstViewLandscape";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import HomeNavigation from "./HomeNavigation/HomeNavigation";
import LeftBar from "./HomeNavigation/LeftBar";
import { DEFAULT_CLUB } from "./data/clubs_data";
import { IClubTheme, SectionRefType } from "./types/homeTypes";
import MatchesView from "./MatchesView";

const HomeScreen = () => {
  const [clubTheme, setClubTheme] = useState(DEFAULT_CLUB)
  const [currentPage, setCurrentPage] = useState(1)

  const mainRef = useRef<null | HTMLInputElement>(null);
  const homeRef = useRef<null | HTMLInputElement>(null);
  const clubRef = useRef<null | HTMLInputElement>(null);
  const matchesRef = useRef<null | HTMLInputElement>(null);
  const packsRef = useRef<null | HTMLInputElement>(null);
  const playersRef = useRef<null | HTMLInputElement>(null);

  const refMap = {
    home: homeRef,
    club: clubRef,
    matches: matchesRef,
    packs: packsRef,
    players: playersRef,
  };

  const { scrollYProgress } = useScroll({
    container: mainRef
  })

  const isMobile = useMediaQuery({ query: '(max-width: 639px)' },);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) {
      setCurrentPage(1)
    } else if (latest < 0.4) {
      setCurrentPage(2)
    } else if (latest < 0.6) {
      setCurrentPage(3)
    } else if (latest < 0.8) {
      setCurrentPage(4)
    } else {
      setCurrentPage(5)
    }
  })

  const themeChangeHandler = (clubTheme: IClubTheme) => {
    setClubTheme(clubTheme)
  }

  const scrollToSection = (sectionRef: SectionRefType) => {
    refMap[sectionRef]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const setCurrentPageHandler = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <main ref={mainRef} className="relative h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory" >
      {/* <LeftBar currentPage={currentPage} /> */}
      {/* <div className="fixed flex justify-end w-full pr-8 z-[3] text-white ">
        {isMobile ? (
          <div className="text-[2em] m-[0.2em]">
            <MenuIcon fontSize="inherit" onClick={() => scrollToSection("club")} />
          </div>) :
          <HomeNavigation scrollTo={scrollToSection} setPage={setCurrentPageHandler} selected={currentPage} />
        }
      </div > */}
      {isMobile ? <FirstViewPortrait ref={homeRef} scrollTo={scrollToSection} /> : <FirstViewLandscape ref={homeRef} scrollTo={scrollToSection} />}
      <ClubView ref={clubRef} themeChangeHandler={themeChangeHandler} clubTheme={clubTheme} />
      {/* <MatchesView ref={matchesRef} clubTheme={clubTheme} />
      <PacksView ref={packsRef} clubTheme={clubTheme} /> */}
      <PlayersView ref={playersRef} clubTheme={clubTheme} />
    </main>


  );
};

export default HomeScreen;

