import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { uiActions } from "./ui-slice";

export const logOut = () => {
  return async (dispatch, getState) => {
    console.log("working in thunk");
    signOut(auth)
      .then(() => {
        dispatch(uiActions.login({ logged: false, uId: null, userData: null }));
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };
};
