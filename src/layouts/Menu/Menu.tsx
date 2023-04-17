import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import { logOut } from "../../store/ui-actions";
import { playersActions } from "../../store/players-slice";
import { drawerStyles, listItemStyles } from "./menuStyles";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useAppDispatch, useAppSelector } from "../../store/app/hooks";
import { MENU_LIST } from "./menu-data";

const Menu = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const showMenu = useAppSelector((state) => state.ui.menuIsVisible);

  const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    dispatch(uiActions.toggle());
  };

  const logoutHandler = () => {
    dispatch(logOut());
    dispatch(playersActions.replaceAllMyPlayers([]));
    dispatch(uiActions.toggle());
  };

  const menuClickHandler = (text: string) => {
    if (text === "Logout") {
      logoutHandler();
    } else {
      dispatch(uiActions.toggle());
    }
  };

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {MENU_LIST.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            onClick={() => menuClickHandler(item.text)}
          >
            <ListItem
              disablePadding
              sx={listItemStyles}
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
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          PaperProps={{
            sx: drawerStyles,
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
