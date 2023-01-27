import { packsActions } from "./packs-slice";

export const receivePackData = () => {
  return async (dispatch, getState) => {
    const uId = getState().ui.uId;
    const fetchData = async () => {
      const response = await fetch(
        `https://futdraft-5f63c-default-rtdb.europe-west1.firebasedatabase.app/users/${uId}/packs.json`
      );

      let data = await response.json();
      if (data === null) {
        data = [];
      }

      return data;
    };

    try {
      const packsData = await fetchData();
      dispatch(packsActions.replaceAllMyPacks(packsData));
    } catch (error) {
      console.log("Błąd" + error);
    }
  };
};

export const sendPackData = () => {
  return async (dispatch, getState) => {
    const uId = getState().ui.uId;
    const myPacks = await getState().packs.myPacks;
    const sendRequest = async () => {
      await fetch(
        `https://futdraft-5f63c-default-rtdb.europe-west1.firebasedatabase.app/users/${uId}/packs.json`,
        {
          method: "PUT",
          body: JSON.stringify(myPacks),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
};
