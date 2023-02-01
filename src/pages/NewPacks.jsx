import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { packsActions } from "../store/packs-slice";
import { sendPackData } from "../store/packs-actions";
import Pack from "../components/Pack";

const packsArray = [
  {
    id: "p1",
    packRating: 70,
    packColor: "teal",
    playersAmount: 8,
    packAmount: 1,
  },
  {
    id: "p2",
    packRating: 60,
    packColor: "red",
    playersAmount: 8,
    packAmount: 1,
  },
  {
    id: "p3",
    packRating: 50,
    packColor: "green",
    playersAmount: 8,
    packAmount: 1,
  },
];

const NewPacks = () => {
  const dispatch = useDispatch();

  const buyPack = (pack) => {
    dispatch(packsActions.addPack(pack));
    dispatch(sendPackData());
  };
  return (
    <div className="flex  w-full flex-col items-center gap-8 p-8">
      {packsArray.length === 0 && (
        <p className="text-white text-6xl">Brak Paczek Biedaku</p>
      )}
      {packsArray &&
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
              openModal={() => {}}
              onClick={buyPack}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default NewPacks;
