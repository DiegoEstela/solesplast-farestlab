import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BuildIcon from "@mui/icons-material/Build";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  ".MuiDrawer-paper": {
    width: "85%", // Reducimos el ancho para que se vea más proporcionado
    maxWidth: "280px", // Se mantiene compacto en pantallas grandes
    height: "100vh", // Ocupa toda la altura
    backgroundColor: theme.palette.background.default,
    borderRadius: "0 16px 16px 0",
    boxShadow: "4px 0 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    overflowX: "hidden", // Evita el desplazamiento horizontal
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  borderRadius: "8px",
  whiteSpace: "nowrap", // Evita que el texto haga scroll horizontal
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "scale(1.02)",
  },
  "&:active": {
    transform: "scale(0.98)",
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.navbar.main,
        backdropFilter: "blur(10px)",
        color: theme.palette.text.primary,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuToggle}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: theme.typography.h6.fontSize,
            letterSpacing: "0.5px",
            color: theme.palette.primary.main,
          }}
        >
          SOLESPLAST
        </Typography>
      </Toolbar>

      <StyledDrawer anchor="left" open={open} onClose={handleMenuToggle}>
        <List>
          <StyledListItem
            onClick={() => handleNavigate("/customers")}
            sx={{ padding: 2 }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
          </StyledListItem>
          <StyledListItem
            onClick={() => handleNavigate("/products")}
            sx={{ padding: 2 }}
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Productos" />
          </StyledListItem>
          <StyledListItem
            onClick={() => handleNavigate("/services")}
            sx={{ padding: 2 }}
          >
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Servicios" />
          </StyledListItem>
        </List>
      </StyledDrawer>
    </AppBar>
  );
};

export default Navbar;
