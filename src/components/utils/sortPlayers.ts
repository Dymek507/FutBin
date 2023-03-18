import type { Player } from "../../modules/modelTypes";

const getVariant = (variant: unknown) => {
  const map = {
    ovr: "rating",
    pac: "pace",
    sho: "shooting",
    pas: "passing",
  };

  return map[variant] || "rating";
};

const sortPlayers = (
  playersArray: Player[],
  sortingAtr: string,
  sortingDir: boolean
): Player[] => {
  const newArray = [...playersArray];
  //Sorting by attribute
  if (sortingAtr === "ovr") {
    newArray.sort((a, b) => {
      return a.rating - b.rating;
    });
  }
  if (sortingAtr === "pac") {
    newArray.sort((a, b) => {
      return a.pace - b.pace;
    });
  }
  if (sortingAtr === "sho") {
    newArray.sort((a, b) => {
      return a.shooting - b.shooting;
    });
  }
  if (sortingAtr === "pas") {
    newArray.sort((a, b) => {
      return a.passing - b.passing;
    });
  }
  if (sortingAtr === "dri") {
    newArray.sort((a, b) => {
      return a.dribbling - b.dribbling;
    });
  }
  if (sortingAtr === "def") {
    newArray.sort((a, b) => {
      return a.defending - b.defending;
    });
  }
  if (sortingAtr === "phy") {
    newArray.sort((a, b) => {
      return a.physicality - b.physicality;
    });
  }
  //Sorting by direction
  if (sortingDir) {
    newArray.reverse();
  }

  return newArray;
};

export default sortPlayers;
