import united from "./manu_logo.png";
import chelsea from "./chelsea_logo.png";
import bvb from "./bvb_logo.png";
import city from "./city_logo.png";
import inter from "./inter_logo.png";
import juve from "./juve_logo.png";
import real from "./real_logo.png";

export interface ClubLogos {
  united: string;
  chelsea: string;
  bvb: string;
  city: string;
  inter: string;
  juve: string;
  real: string;
}
const clubLogos: ClubLogos = {
  united,
  chelsea,
  bvb,
  city,
  inter,
  juve,
  real,
};

export default clubLogos;
