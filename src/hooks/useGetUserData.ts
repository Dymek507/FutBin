import { useEffect, useState } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebaseConfig";
import { UserDataOnDb } from "../types/modelTypes";
import { dummyUserDbData } from "../data/dummyUser";

const useGetUserData = (uid: string | null): UserDataOnDb => {
  const [userData, setUserData] = useState<UserDataOnDb>(dummyUserDbData);

  useEffect(() => {
    const getData = async () => {
      if (uid !== null) {
        const userDocRef = doc(db, `users/${uid}`);
        await getDoc(userDocRef).then((data) => {
          const result = data.data();
          // @ts-ignore
          if (result !== undefined) setUserData(result);
        });
      }
    };
    getData();
  }, [uid]);
  return userData;
};

export default useGetUserData;
