import { useState, useEffect } from "react";
import useSWR from "swr";
import axios, { AxiosRequestConfig } from "axios";

const AuthToken = process.env.REACT_APP_FUT_DB_KEY;

const axiosFetchBlob: AxiosRequestConfig = {
  responseType: "blob",
  headers: {
    Accept: "image/png",
    "X-Auth-Token": AuthToken,
  },
};

const fetcher = (url: string) =>
  axios.get(url, axiosFetchBlob).then((r) => r.data);

export const useFetcherSWR = (endPoint: string) => {
  const [image, setImage] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `https://futdb.app/api/${endPoint}` : null,
    fetcher
  );

  useEffect(() => {
    if (data) {
      const playerImage = URL.createObjectURL(data);
      setImage(playerImage);
      setShouldFetch(false);
    }
  }, [data]);

  return { image, error, isLoading };
};
