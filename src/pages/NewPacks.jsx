import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pack from "../components/Pack";
import Layout from "../components/UI/Layout";
import OpeningModal from "../components/UI/OpeningModal";

const NewPacks = () => {
  const packs = useSelector((state) => state.packs.packsArray);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const clickModal = (state) => {
    setShowModal(state);
  };

  return (
    <Layout>
      {showModal && <OpeningModal onOpen={showModal} onClose={clickModal} />}
      <div className="flex justify-center gap-6 w-[90vw] my-2">
        {packs.length === 0 && (
          <p className="text-white text-6xl">Brak Paczek Biedaku</p>
        )}
        {packs &&
          packs.map((pack) => (
            <Pack
              key={pack.id}
              id={pack.id}
              minRating={pack.packRating}
              color={pack.packColor}
              playersNum={pack.playersAmount}
              amount={pack.packAmount}
              openModal={clickModal}
            />
          ))}
      </div>
    </Layout>
  );
};

export default NewPacks;
