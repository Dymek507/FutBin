import React from "react";
import { motion } from "framer-motion";

import { packsActions } from "../../store/packs-slice";
import { sendPackData } from "../../store/packs-actions";
import { useAppDispatch } from "../../store/app/hooks";
import { PackT } from "../../types/modelTypes";
import SwapPacks from "./SwapPacks";
import { packsData } from "../../data/packsData";


const NewPacks = () => {
  const dispatch = useAppDispatch();

  const buyPack = (pack: PackT) => {
    dispatch(packsActions.addPack(pack));
    dispatch(sendPackData());
  };
  return (
    <div>
      <SwapPacks packs={packsData} buyPack={buyPack} showPrice={true} />

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
