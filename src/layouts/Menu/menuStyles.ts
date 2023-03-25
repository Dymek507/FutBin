import NEY from "../../assets/menu-effect-1.webp";

export const drawerStyles = {
  backgroundColor: "rgba(12,52,86,1)",
  color: "white",
  backgroundImage: `url(${NEY})`,
  backgroundSize: "50vh auto",
  backgroundPosition: "30% 110%",
  backgroundRepeat: "no-repeat",
};

export const listItemStyles = {
  "&:hover": {
    backgroundColor: "rgba(7,26,42,1)",
    color: "white",
    "& .MuiListItemIcon-root": {
      color: "white",
    },
  },
};
