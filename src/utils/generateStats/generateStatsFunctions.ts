import {
  goldN,
  goldR,
  silverN,
  silverR,
  bronzeN,
  bronzeR,
} from "../../assets/CardBackgrounds";
import { Player } from "../../types/modelTypes";

export const choseBackground = (
  rarity: number,
  color: "bronze" | "silver" | "gold",
  type: "card" | "line"
): string => {
  const gradients: Record<
    string,
    Record<number, Record<"bronze" | "silver" | "gold", string>>
  > = {
    card: {
      0: { bronze: bronzeN, silver: silverN, gold: goldN },
      1: { bronze: bronzeR, silver: silverR, gold: goldR },
    },
    line: {
      0: {
        bronze:
          "linear-gradient(90deg, rgba(79,38,1,1) 0%, rgba(101,49,0,1) 39%, rgba(130,63,0,1) 100%)",
        silver:
          "linear-gradient(90deg, rgba(80,80,80,1) 0%, rgba(96,96,96,1) 39%, rgba(112,112,112,1) 100%)",
        gold: "linear-gradient(90deg, rgba(171,154,0,1) 0%, rgba(185,167,0,1) 39%, rgba(204,183,0,1) 100%)",
      },
      1: {
        bronze:
          "linear-gradient(90deg, rgba(79,38,1,1) 0%, rgba(101,49,0,1) 39%, rgba(130,63,0,1) 100%)",
        silver:
          "linear-gradient(90deg, rgba(80,80,80,1) 0%, rgba(96,96,96,1) 39%, rgba(112,112,112,1) 100%)",
        gold: "linear-gradient(90deg, rgba(171,154,0,1) 0%, rgba(185,167,0,1) 39%, rgba(204,183,0,1) 100%)",
      },
    },
  };

  return gradients[type][rarity][color];
};

export const changeToGkStats = (playerData: Player) => {
  const { diving, handling, kicking, positioning, reflexes, speed } =
    playerData.goalkeeperAttributes;

  if (playerData.position === "GK") {
    return {
      defending: speed?.toString() ?? "0",
      pace: diving?.toString() ?? "0",
      dribbling: reflexes?.toString() ?? "0",
      shooting: handling?.toString() ?? "0",
      passing: kicking?.toString() ?? "0",
      physicality: positioning?.toString() ?? "0",
    };
  } else {
    return;
  }
};
