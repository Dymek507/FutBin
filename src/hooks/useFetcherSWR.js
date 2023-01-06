import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

const AuthToken = "9da99810-9712-4bb5-a2a6-73e3df0078c0";

const axiosFetchBlob = {
  responseType: "blob",
  headers: {
    Accept: "image/png",
    "X-Auth-Token": AuthToken,
  },
};

const fetcher = (url) => axios.get(url, axiosFetchBlob).then((r) => r.data);

export const useFetcherSWR = (endPoint) => {
  const [playerImage, setPlayerImage] = useState("");

  const { data, error, isLoading } = useSWR(
    `https://futdb.app/api/${endPoint}`,
    // `https://futdb.app/api/players/${id}/image`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      const playerPhoto = URL.createObjectURL(data);
      setPlayerImage(playerPhoto);
    }
  }, [data]);

  return playerImage;
};
