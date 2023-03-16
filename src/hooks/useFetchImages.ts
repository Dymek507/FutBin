import { useState, useEffect } from "react";
import { useFetcherSWR } from "./useFetcherSWR";

interface IPlayerImages {
  playerPhoto: string;
  playerNation: string;
  playerClub: string;
  imagesLoaded: boolean;
}

export const useFetchImages = (
  id: number,
  club: number,
  nation: number
): IPlayerImages => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const {
    image: playerPhoto,
    error: errorPhoto,
    isLoading: isLoadingPhoto,
  } = useFetcherSWR(`players/${id}/image`);
  const {
    image: playerNation,
    error: errorNation,
    isLoading: isLoadingNation,
  } = useFetcherSWR(`nations/${nation}/image`);
  const {
    image: playerClub,
    error: errorClub,
    isLoading: isLoadingClub,
  } = useFetcherSWR(`clubs/${club}/image`);
  //Check if every image is loaded
  useEffect(() => {
    if (isLoadingClub && isLoadingNation && isLoadingPhoto) {
      setImagesLoaded(true);
    }
  }, [isLoadingClub, isLoadingNation, isLoadingPhoto]);

  return { playerPhoto, playerNation, playerClub, imagesLoaded };
};
