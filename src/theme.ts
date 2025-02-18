import { createTheme } from "@mui/material/styles";

// Extendemos la interfaz de PaletteOptions para incluir "navbar"
declare module "@mui/material/styles" {
  interface Palette {
    navbar: {
      main: string;
    };
  }
  interface PaletteOptions {
    navbar?: {
      main: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#007AFF", // Azul iOS
    },
    secondary: {
      main: "#34C759", // Verde iOS
    },
    navbar: {
      main: "#F8F8F8", // Blanco hoja, no brillante
    },
    background: {
      default: "#E5E5EA", // Blanco grisáceo
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1C1C1E",
      secondary: "#8E8E93",
    },
  },
});

export default theme;
