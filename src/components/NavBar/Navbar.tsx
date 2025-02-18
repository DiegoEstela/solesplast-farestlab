import {
  Toolbar,
  Typography,
  IconButton,
  Badge,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BuildIcon from "@mui/icons-material/Build";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  NavbarContainer,
  LogoContainer,
  NavbarIcons,
  StyledDrawer,
  StyledListItem,
  ToolbarIcon,
} from "./NavBar.style";

const Navbar = () => {
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
    <NavbarContainer position="static">
      <Toolbar>
        <ToolbarIcon>
          <IconButton
            edge="start"
            color="default"
            onClick={handleMenuToggle}
            sx={{ fontSize: "1.8rem" }}
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </ToolbarIcon>

        <StyledDrawer anchor="left" open={open} onClose={handleMenuToggle}>
          <List>
            <StyledListItem onClick={() => handleNavigate("/customers")}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Clientes" />
            </StyledListItem>
            <StyledListItem onClick={() => handleNavigate("/products")}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Productos" />
            </StyledListItem>
            <StyledListItem onClick={() => handleNavigate("/services")}>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Servicios" />
            </StyledListItem>
          </List>
        </StyledDrawer>

        <LogoContainer>
          <Typography variant="h6" color="primary">
            SOLESPLAST
          </Typography>
        </LogoContainer>

        <NavbarIcons>
          {/* Notificaciones */}
          <IconButton color="default" sx={{ fontSize: "2rem" }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon fontSize="inherit" color="action" />
            </Badge>
          </IconButton>

          {/* Ir al Home */}
          <IconButton
            color="default"
            onClick={() => navigate("/")}
            sx={{ fontSize: "2.2rem", padding: 0 }}
          >
            <HomeIcon fontSize="inherit" color="action" />
          </IconButton>
        </NavbarIcons>
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;
