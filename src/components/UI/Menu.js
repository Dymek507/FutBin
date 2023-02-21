import React from "react";
import { Link, useNavigate } from "react-router-dom";
import uiSlice, { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/ui-actions";
import { playersActions } from "../../store/players-slice";

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
import GroupsIcon from "@mui/icons-material/Groups";
import InventoryIcon from "@mui/icons-material/Inventory";

import NEY from "../../assets/menu-effect-1.png";
import { AdminPanelSettings } from "@mui/icons-material";

const Menu = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.ui.menuIsVisible);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(uiActions.toggle());
  };

  const logoutHandler = () => {
    console.log("working in menu");
    dispatch(logOut());
    dispatch(playersActions.replaceAllMyPlayers([]));
    dispatch(uiActions.toggle());
    navigate("/");
  };

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
  ];
  const subMenuList = [
    {
      id: 1,
      text: "Settings",
      icon: <SettingsIcon />,
      link: "/settings",
      onClick: () => {},
    },
    {
      id: 2,
      text: "Logout",
      icon: <LogoutIcon />,
      link: "/logout",
      onClick: logoutHandler,
    },
  ];

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuList.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            onClick={() => dispatch(uiActions.hideMenu())}
          >
            <ListItem
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(7,26,42,1)",
                  color: "white",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
              }}
            >
              <ListItemButton
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider
        sx={{
          backgroundColor: "white",
          marginX: "20px",
        }}
      />
      <List>
        {subMenuList.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "rgba(7,26,42,1)",
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              },
            }}
          >
            <ListItemButton
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
              onClick={item.onClick}
            >
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
              backgroundImage: `url(${NEY})`,
              backgroundSize: "50vh auto",
              backgroundPosition: "30% 110%",
              backgroundRepeat: "no-repeat",
            },
          }}
          sx={{
            display: {
              "& .MuiDrawer-paper": {},
            },
          }}
          anchor={"left"}
          open={showMenu}
          onClose={toggleDrawer()}
        >
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Menu;
