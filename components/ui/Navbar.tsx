import { useContext } from "react";
import Link from "next/link";

import { UIContext } from "../../context/ui";

import { AppBar, IconButton, Toolbar, Typography, Link as MuLink } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>

        <Link href='/' passHref >
          <MuLink underline='none' color='white'>
            <Typography variant="h6">OPENJIRA</Typography>
          </MuLink>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
