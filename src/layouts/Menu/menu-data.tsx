import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupsIcon from "@mui/icons-material/Groups";
import InventoryIcon from "@mui/icons-material/Inventory";
import { AdminPanelSettings } from "@mui/icons-material";
import FlagIcon from '@mui/icons-material/Flag';



interface IListItem {
  id: number;
  text: string;
  icon: React.ReactNode;
  link: string;
}

export const MENU_LIST: IListItem[] = [
  {
    id: 0,
    text: "Landing",
    icon: <FlagIcon />,
    link: "/",
  },
  {
    id: 1,
    text: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    id: 2,
    text: "New Packs",
    icon: <FiberNewIcon />,
    link: "/new-packs",
  },
  {
    id: 3,
    text: "My Packs",
    icon: <InventoryIcon />,
    link: "/my-packs",
  },
  {
    id: 4,
    text: "My Players",
    icon: <BusinessCenterIcon />,
    link: "/my-players",
  },
  {
    id: 5,
    text: "Squad",
    icon: <GroupsIcon />,
    link: "/squad",
  },
  {
    id: 6,
    text: "Admin",
    icon: <AdminPanelSettings />,
    link: "/admin",
  },
  {
    id: 7,
    text: "Logout",
    icon: <LogoutIcon />,
    link: "/home",
  },
];