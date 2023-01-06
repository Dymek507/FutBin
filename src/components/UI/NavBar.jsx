import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Drawer } from "@mui/material";

const Logo = (props) => {
  return (
    <Typography
      variant="h5"
      fontSize="2rem"
      sx={{ border: 2, borderColor: "white", borderRadius: 2, px: 0.5 }}
    >
      {props.children}{" "}
      <SportsSoccerIcon fontSize="1rem" sx={{ paddingBottom: 0.5 }} />
    </Typography>
  );
};

const NavBar = () => {
  const dispatch = useDispatch();

  const toogleMenu = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(12,52,86,0.85)",
      }}
    >
      <Toolbar>
        <IconButton
          onClick={toogleMenu}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
          <MenuIcon sx={{ fontSize: "2.5rem" }} />
        </IconButton>
        <div className="flex grow">
          <Logo>FutDraft</Logo>
        </div>
        <Button
          color="inherit"
          sx={{
            "& .MuiTypography-root": {
              textTransform: "none",
            },
          }}
        >
          <Typography fontSize="1.5rem">Login</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
