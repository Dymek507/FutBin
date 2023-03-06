import { useState, useEffect, useMemo } from "react";
import { Player } from "../modules/modelTypes";
import { useFetcherSWR } from "./useFetcherSWR";

interface IPlayerImages {
  playerPhoto: string;
  playerNation: string;
  playerClub: string;
}
interface UseFetchImagesProps {
  id: number;
  club: number;
  nation: number;
}

export const useFetchImages = (
  id: number,
  club: number,
  nation: number
): IPlayerImages => {
  // export const useFetchImages = ({ playerObject: Player }) => {
  // const { id = 1, club = 1, nation = 1 } = playerObject;

  const playerPhoto = useFetcherSWR(`players/${id}/image`);
  const playerNation = useFetcherSWR(`nations/${nation}/image`);
  const playerClub = useFetcherSWR(`clubs/${club}/image`);

  const [playerImages, setPlayerImages] = useState<IPlayerImages>({
    playerPhoto: "",
    playerNation: "",
    playerClub: "",
  });
  useEffect(() => {
    if (playerPhoto) {
      setPlayerImages((prev) => ({ ...prev, playerPhoto }));
    }
  }, [playerPhoto]);

  useEffect(() => {
    if (playerNation) {
      setPlayerImages((prev) => ({ ...prev, playerNation }));
    }
  }, [playerNation]);

  useEffect(() => {
    if (playerClub) {
      setPlayerImages((prev) => ({ ...prev, playerClub }));
    }
  }, [playerClub]);

  return playerImages;
};
