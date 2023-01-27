import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { packsActions } from "../store/packs-slice";
import { playersActions } from "../store/players-slice";
import { drawPlayer } from "../store/players-fetch";
import { receivePackData, sendPackData } from "../store/packs-actions";

import Pack from "../components/Pack";
import Layout from "../components/UI/Layout";
import OpeningModal from "../components/UI/OpeningModal";

const MyPacks = () => {
  const dispatch = useDispatch();

  const myPacks = useSelector((state) => state.packs.myPacks);
  const uId = useSelector((state) => state.ui.uId);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(receivePackData());
  }, [dispatch, uId]);

  const toggleModal = (state) => {
    setShowModal(state);
  };

  //Move to MyPacks
  const OpenPack = (packData) => {
    dispatch(packsActions.removePack(packData.id));
    dispatch(playersActions.deleteCurrentPack());
    dispatch(sendPackData());

    const pack = [];
    for (let i = 0; i < packData.playersAmount; i++) {
      pack.push(packData.packRating);
    }
    pack.forEach((player) => dispatch(drawPlayer(player)));
    toggleModal(true);
  };

  return (
    <Layout styles={{ width: "100vw", display: "flex" }}>
      {showModal && <OpeningModal onOpen={showModal} onClose={toggleModal} />}
      <div className="flex flex-col items-center gap-8 w-full mt-8">
        {/* <div className="flex bg-slate-400 justify-center gap-6 m-8 flex-col"> */}
        {myPacks.length === 0 && (
          <div className="bg-main p-2 rounded-xl">
            <p className="text-white text-4xl">Brak Paczek Biedaku</p>
          </div>
        )}
        {myPacks &&
          myPacks.map((pack) => (
            <Pack
              key={pack.id}
              packData={pack}
              openModal={toggleModal}
              onClick={OpenPack}
            />
          ))}
      </div>
    </Layout>
  );
};

export default MyPacks;
