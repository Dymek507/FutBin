import React from "react";
import { motion } from "framer-motion";

import { packsActions } from "../../store/packs-slice";
import { sendPackData } from "../../store/packs-actions";
import { useAppDispatch } from "../../store/app/hooks";
import { PackT } from "../../modules/modelTypes";
import SwapPacks from "./SwapPacks";
import { Box } from "@mui/material";

const packsArray = [
  {
    id: 0,
    packRating: 80,
    packColor: "special",
    playersAmount: 8,
    packAmount: 1,
  },
  {
    id: 1,
    packRating: 70,
    packColor: "gold",
    playersAmount: 8,
    packAmount: 1,
  },
  {
    id: 2,
    packRating: 60,
    packColor: "silver",
    playersAmount: 8,
    packAmount: 1,
  },
  {
    id: 3,
    packRating: 50,
    packColor: "brown",
    playersAmount: 8,
    packAmount: 1,
  },
];

const NewPacks = () => {
  const dispatch = useAppDispatch();

  const buyPack = (pack: PackT) => {
    dispatch(packsActions.addPack(pack));
    dispatch(sendPackData());
  };
  return (
    <div>
      <SwapPacks packs={packsArray} buyPack={buyPack} />

      {/* {packsArray &&
        packsArray.map((pack) => (
          <motion.div
          key={pack.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 1 }}
          >
          <Pack
          key={pack.id}
          packData={pack}
          openModal={() => { }}
          onClick={buyPack}
          />
          </motion.div>
        ))} */}

    </div>
  );
};

export default NewPacks;
