import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Note,
  VerifiedUserRounded,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomAppBar = styled(AppBar)`
  background: white;
  color: black;
  box-shadow: none;
  border-bottom: 1px solid
    ${({ theme }: { theme: any }) => theme.palette.divider};
`;

type NavBarProps = {
  title: string;
};

type LinkType = { name: string; icon: React.ReactNode; path: string };

const links: LinkType[] = [
  { name: "Todos", icon: <Note />, path: "/" },
  { name: "Users", icon: <VerifiedUserRounded />, path: "/users" },
];

function NavBar({ title }: NavBarProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (linkName: string) => navigate(linkName);

  return (
    <>
      <CustomAppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="h2">
            {title}
          </Typography>
        </Toolbar>
      </CustomAppBar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <List disablePadding>
          {links.map((link, index) => (
            <ListItem
              key={index}
              sx={{ paddingX: 0 }}
              onClick={() => handleClick(link.path)}
            >
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
