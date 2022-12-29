import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const menuList = [
  {
    id: 1,
    text: "Home",
    icon: <HomeIcon />,
    link: "/",
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
    icon: <BusinessCenterIcon />,
    link: "/my-packs",
  },
];
const subMenuList = [
  {
    id: 1,
    text: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
  {
    id: 2,
    text: "Logout",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];

export default function SwipeableTemporaryDrawer() {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {menuList.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {subMenuList.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer anchor={"left"} open={false}>
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
