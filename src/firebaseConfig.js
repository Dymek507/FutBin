import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeXXWt63CCL1LvuK2GjTilm0rReuZXso0",
  authDomain: "futdraft-5f63c.firebaseapp.com",
  projectId: "futdraft-5f63c",
  storageBucket: "futdraft-5f63c.appspot.com",
  messagingSenderId: "649077113897",
  appId: "1:649077113897:web:650971be5ea21862a0c838",
  measurementId: "G-5M1CK7BRM6",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
