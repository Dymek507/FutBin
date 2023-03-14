import React from "react";
import Fireworks from "@fireworks-js/react";
import { motion } from "framer-motion";
import { useFetchImages } from "../../../hooks/useFetchImages";

import Card from "../../../components/Card";
import { Typography } from "@mui/material";
import { Player } from "../../../modules/modelTypes";
import firework from '../../../assets/firework.png'

type WalkoutAnimationProps = {
  closeWalkout: () => void;
  player: Player
}

const WalkoutAnimation = ({ closeWalkout, player }: WalkoutAnimationProps) => {
  // const images = useFetchImages(player);
  const images = useFetchImages(player.id, player.club, player.nation);

  let { playerClub = "", playerNation = "" } = images;

  //Framer Motion variant
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 2,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div onClick={closeWalkout} className="w-full h-full text-2xl z-30 ">
      {/* <Fireworks
        options={{
          delay: {
            min: 90,
            max: 100,
          },
          explosion: 2,
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "80%",
          position: "fixed",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Fireworks> */}

      <div className="absolute inset-0 h-full w-full flex flex-col gap-8 justify-between items-center text-sm sm:text-3xl bg-black bg-walkout-bg-2 bg-cover bg-center">
        <div className="absolute left-[2%] sm:left-[10%] bottom-[10%] h-[16em] w-[10em] bg-walkout-fr-l bg-contain bg-no-repeat">
          <motion.div
            custom={10}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <img
              className="absolute h-[5em] right-[2.2em] top-[4em] skew-y-[9deg] "
              src={playerClub}
              alt="player_club_image"
            />
          </motion.div>
          <motion.div
            custom={15}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <img
              className="absolute h-[2.4em] right-[3.2em] bottom-[3em] "
              src={playerNation}
              alt="player_club_image"
            />
          </motion.div>
        </div>
        <motion.div
          custom={25}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="mt-40 sm:mt-32"
        >
          <Card playerData={player} fontSize={"0.8em"} />
        </motion.div>

        <div className="absolute right-[2%] sm:right-[10%] bottom-[10%] h-[16em] w-[10em] bg-walkout-fr-r bg-contain bg-no-repeat">
          <motion.div
            custom={10}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <img
              className="absolute h-[5em] left-[2em] top-[4em] skew-y-[-9deg] "
              src={playerClub}
              alt="player_club_image"
            />
          </motion.div>
          <motion.div
            custom={15}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <img
              className="absolute h-[2.4em] left-[3em] bottom-[3em] "
              src={playerNation}
              alt="player_club_image"
            />
          </motion.div>
        </div>

        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="mb-3"
        >
          <Typography color={"white"} variant="h2" fontSize={"2em"}>
            Tap to close
          </Typography>
        </motion.div>
      </div>
    </div>
  );
};

export default WalkoutAnimation;
