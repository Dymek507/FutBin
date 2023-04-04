import React from "react";
import { motion } from "framer-motion";

import { packsActions } from "../../store/packs-slice";
import { sendPackData } from "../../store/packs-actions";
import { useAppDispatch } from "../../store/app/hooks";
import { PackT } from "../../types/modelTypes";
import PacksDisplay from "./PacksDisplay";
import { packsData } from "../../data/packsData";


const NewPacks = () => {
  const dispatch = useAppDispatch();

  const buyPack = (pack: PackT) => {
    dispatch(packsActions.addPack(pack));
    dispatch(sendPackData());
  };
  return (
    <div>
      <PacksDisplay packs={packsData} buyPack={buyPack} showPrice={true} />
    </div>
  );
};

export default NewPacks;
