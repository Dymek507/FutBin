import { Button } from "@mui/material";
import axios from "axios";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from "@firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { apiKey } from "../futDbConfig";

const AuthToken = apiKey;

const axiosGetData = {
  headers: {
    Accept: "application/json",
    "X-Auth-Token": AuthToken,
  },
};

const users = [
  {
    login: "Damian",
    email: "dymek@gmail.com",
    uId: "WnE3BocTFBULtk7JAFLUMpQWai82",
  },
  {
    login: "Michał",
    email: "michaldenk95@gmail.com",
    uId: "1mZUXLATajP3b8LFiOpPOvjilZR2",
  },
  {
    login: "Mateusz",
    email: "mati44211@gmail.com",
    uId: "GOBwLmtYkgZItkBzqKBSBV1n6yX2",
  },
];

const user = users[0];

const Admin = () => {
  //download from realtime base
  const [playerData, setPlayerData] = useState();
  const fetchPlayerData = async () => {
    const playerData = await axios
      .get(
        `https://futdraft-5f63c-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uId}/players-data.json
        `,
        axiosGetData
      )
      .then((res) => {
        return res.data;
      });
    console.log(playerData);
    setPlayerData(playerData);
    return playerData;
  };
  //send to firebase
  const sendToFirebase = async () => {
    const userDocRef = doc(db, `users/${user.uId} `);

    console.log(userDocRef);
    setDoc(userDocRef, {
      login: user.login,
      email: user.email,
      playersData: playerData,
      currentPackPlayers: [],
      money: 10000,
      result: { wins: 0, draws: 0, loses: 0 },
      goals: { goalsFor: 0, goalsAgainst: 0 },
    });
  };

  const testToFirebase = async () => {
    const userDocRef = doc(db, `users/${user.uId} `);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div>
      <Button variant="contained" size="large" onClick={fetchPlayerData}>
        Pobierz
      </Button>
      <Button variant="contained" size="large" onClick={sendToFirebase}>
        Wyślij
      </Button>
      <Button variant="contained" size="large" onClick={testToFirebase}>
        test
      </Button>
    </div>
  );
};

export default Admin;
