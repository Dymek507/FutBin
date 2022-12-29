import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
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

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenMenu(open);
  };

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuList.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link to={item.link}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
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
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "rgba(12,52,86,1)",
              color: "white",
            },
          }}
          anchor={"left"}
          open={openMenu}
          onClose={toggleDrawer(false)}
        >
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Menu;
