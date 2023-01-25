import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

const AuthToken = "9317d346-9be7-4023-8872-0114c73d26a6";

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
