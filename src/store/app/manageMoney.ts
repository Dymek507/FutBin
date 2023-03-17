import React from "react";
import { doc, getDoc, updateDoc, increment } from "@firebase/firestore";
import { db } from "../../firebaseConfig";

const manageMoney = async (uId: string, amount: number) => {
  if (uId !== null) {
    const userDocRef = doc(db, `users/${uId}`);
    try {
      await updateDoc(userDocRef, {
        money: increment(amount),
      });
    } catch (error) {
      console.log("Error" + error);
    }
  }
};

export default manageMoney;
