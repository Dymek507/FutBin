import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../firebaseConfig";

const logOut = function () {
  const dispatch = useDispatch();
  signOut(auth)
    .then(() => {
      dispatch(uiActions.login({ logged: false, uId: null, userData: "" }));
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log("An error happened.");
    });
};
