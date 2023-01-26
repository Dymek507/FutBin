import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDatabase, ref, onValue } from "firebase/database";
import { database, app } from "../firebaseConfig";
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";

import Pack from "../components/Pack";
import Layout from "../components/UI/Layout";
import OpeningModal from "../components/UI/OpeningModal";

const MyPacks = () => {
  const packs = useSelector((state) => state.packs.myPacks);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (state) => {
    setShowModal(state);
  };

  return (
    <Layout>
      {showModal && <OpeningModal onOpen={showModal} onClose={toggleModal} />}
      <div className="flex justify-center gap-6 m-8">
        {packs.length === 0 && (
          <p className="text-white text-6xl">Brak Paczek Biedaku</p>
        )}
        {packs &&
          packs.map((pack) => (
            <Pack
              key={pack.id}
              packData={pack}
              openModal={toggleModal}
              onClick={() => {}}
            />
          ))}
      </div>
    </Layout>
  );
};

export default MyPacks;
