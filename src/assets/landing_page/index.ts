import lewandowski from "./rl9.png";
import mist_1 from "./mist_1.png";
import mist_2 from "./mist_2.png";
import mist_3 from "./mist_3.png";
import island_bottom from "./island_bottom.png";
import island_top from "./island_top.png";
import island_field from "./island_field.png";
import island_only_landscape from "./first_page/island_only_landscape.png";
import island_only_portrait from "./first_page/island_only_portrait.png";
import ocean_background from "./first_page/ocean_background.png";

export interface LandingPageImages {
  lewandowski: string;
  mist_1: string;
  mist_2: string;
  mist_3: string;
  island_bottom: string;
  island_top: string;
  island_field: string;
  island_only_landscape: string;
  island_only_portrait: string;
  ocean_background: string;
}
const landingPageImages: LandingPageImages = {
  lewandowski,
  mist_1,
  mist_2,
  mist_3,
  island_bottom,
  island_top,
  island_field,
  island_only_landscape,
  island_only_portrait,
  ocean_background,
};

export default landingPageImages;
