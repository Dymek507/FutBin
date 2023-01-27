import React from "react";
import { useDispatch } from "react-redux";

import { packsActions } from "../store/packs-slice";
import { sendPackData } from "../store/packs-actions";
import Pack from "../components/Pack";
import Layout from "../components/UI/Layout";

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
    <Layout styles={{ width: "100vw", display: "flex" }}>
      <div className="flex  w-full flex-col items-center gap-8 p-8">
        {/* <div className="flex justify-center gap-6 m-8"> */}
        {packsArray.length === 0 && (
          <p className="text-white text-6xl">Brak Paczek Biedaku</p>
        )}
        {packsArray &&
          packsArray.map((pack) => (
            <Pack
              key={pack.id}
              packData={pack}
              openModal={() => {}}
              onClick={buyPack}
            />
          ))}
      </div>
    </Layout>
  );
};

export default NewPacks;
