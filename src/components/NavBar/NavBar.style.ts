// src/components/Navbar.style.ts
import { styled } from "@mui/material/styles";
import { AppBar, Drawer, ListItem } from "@mui/material";

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  backgroundColor: theme.palette.grey[200],
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignContent: "center",
  height: "58px",
}));

export const ToolbarIcon = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flex: 1,
}));

export const LogoContainer = styled("div")(() => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
}));

export const NavbarIcons = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  ".MuiDrawer-paper": {
    width: "85%",
    maxWidth: "280px",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    borderRadius: "0 16px 16px 0",
    boxShadow: "4px 0 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    overflowX: "hidden",
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  borderRadius: "8px",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "scale(1.02)",
  },
  "&:active": {
    transform: "scale(0.98)",
  },
}));
