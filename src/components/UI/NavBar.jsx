import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { SportsRugbySharp } from "@mui/icons-material";

const Logo = (props) => {
  return (
    <Typography
      variant="h5"
      sx={{ border: 2, borderColor: "white", borderRadius: 2, px: 0.5 }}
    >
      {props.children}
    </Typography>
  );
};

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(12,52,86,0.85)",
      }}
    >
      <Toolbar>
        <div className="flex grow">
          <Logo>FutDraft</Logo>
        </div>
        <Button color="inherit">Login</Button>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 1 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
