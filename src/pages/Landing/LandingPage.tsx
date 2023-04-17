import React, { useRef, useState } from "react";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import HomeNavigation from "./LandingNavigation/LandingNavigation";
import FirstViewPortrait from "./FirstView/FirstViewPortrait";
import FirstViewLandscape from "./FirstView/FirstViewLandscape";
import PacksView from "./PacksAndPlayersView/PacksView";
import PlayersView from "./PacksAndPlayersView/PlayersView";
import TeamView from "./TeamView/TeamView";
import ContactView from "./ContactView/ContactView"

import { DEFAULT_CLUB } from "./helpers/data/clubs_data";
import { IClubTheme, SectionRefType } from "./helpers/types/homeTypes";


const HomeScreen = () => {
  const [clubTheme, setClubTheme] = useState(DEFAULT_CLUB)
  const [currentPage, setCurrentPage] = useState(1)

  const mainRef = useRef<null | HTMLInputElement>(null);
  const homeRef = useRef<null | HTMLInputElement>(null);
  const teamRef = useRef<null | HTMLInputElement>(null);
  const packsRef = useRef<null | HTMLInputElement>(null);
  const playersRef = useRef<null | HTMLInputElement>(null);
  const contactRef = useRef<null | HTMLInputElement>(null);

  const refMap = {
    home: homeRef,
    team: teamRef,
    packs: packsRef,
    players: playersRef,
    contact: contactRef,
  };

  const { scrollYProgress } = useScroll({
    container: mainRef
  })

  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

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
      <HomeNavigation currentPage={currentPage} setCurrentPage={setCurrentPageHandler} scrollToSection={scrollToSection} />
      {isMobile ? <FirstViewPortrait ref={homeRef} scrollTo={scrollToSection} /> : <FirstViewLandscape ref={homeRef} scrollTo={scrollToSection} />}
      <TeamView ref={teamRef} themeChangeHandler={themeChangeHandler} clubTheme={clubTheme} />
      <PacksView ref={packsRef} clubTheme={clubTheme} isMobile={isMobile} />
      <PlayersView ref={playersRef} clubTheme={clubTheme} isMobile={isMobile} />
      <ContactView ref={contactRef} clubTheme={clubTheme} isMobile={isMobile} />
    </main>


  );
};

export default HomeScreen;

