import React, { forwardRef } from "react";

import { default as Grid } from '@mui/material/Unstable_Grid2';
import { Typography } from "@mui/material";

import { IClubTheme } from "../helpers/types/homeTypes";
import ButtonMotion from "../FirstView/ButtonMotion";
import { SOCIAL_DATA, STACK_DATA } from "./helpers/footer-data";
import StackGridItem from "./helpers/StackGridItem";

interface IPlayersViewProps {
  clubTheme: IClubTheme,
  isMobile: boolean
}

const CV_EN_URL = "https://pdfhost.io/v/7SGlERPPV_Damian_Dominik_CVEN"
const CV_PL_URL = "https://pdfhost.io/v/yzsQojNfJ_Damian_Dominik_CVPL"

const PlayersView = forwardRef<HTMLInputElement, IPlayersViewProps>(({ clubTheme, isMobile }, ref) => {

  const downloadCV = (url: string) => {
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', CV_EN_URL);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    < section ref={ref} className="relative text-lg sm:text-xl md:text-2xl wh-full" style={{ background: `#065C6B` }
    }>
      <Grid container pt={8} className='h-full text-white snap-center'>
        {/* CV button and text */}
        <Grid xxs={12} className='flex-col gap-6 flex-center'>
          <ButtonMotion link="/my-players">Go to App</ButtonMotion>
          <Typography variant="inherit" className="w-5/6 text-center sm:w-1/2 md:w-2/5 ">I am a Front-end developer currently looking for a job as a junior developer.</Typography>
          <ButtonMotion onClick={() => downloadCV(CV_EN_URL)}>Download CV in English</ButtonMotion>
          <ButtonMotion onClick={() => downloadCV(CV_PL_URL)}>Download CV in Polish</ButtonMotion>
        </Grid>
        {/* Social media icons */}
        <StackGridItem className='w-full gap-8 flex-center bg-slate-900 text-[1.1em]' footerData={SOCIAL_DATA} md={12} />
        {/* Stack icons */}
        <Grid xxs={12} p={2} container className='gap-2 border-t-2 md:gap-8 flex-center bg-slate-900'>
          <StackGridItem className='gap-3 md:gap-8 flex-center md:justify-end' footerData={STACK_DATA.slice(0, 5)} md={5} />
          <StackGridItem className='gap-3 md:gap-8 flex-center md:justify-end' footerData={STACK_DATA.slice(5, 10)} md={5} />
        </Grid>
      </Grid>
    </section >
  )
})

export default PlayersView

