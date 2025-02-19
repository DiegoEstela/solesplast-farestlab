import { createTheme } from "@mui/material/styles";

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
      main: "#007AFF", // Azul
    },
    secondary: {
      main: "#34C759", // Verde
    },
    navbar: {
      main: "#F8F8F8", // Blanco hoja, no brillante
    },
    background: {
      default: "transparent", // Fondo transparente
      paper: "rgba(255, 255, 255, 0.9)", // Blanco semi-transparente
    },
    text: {
      primary: "#1C1C1E",
      secondary: "#8E8E93",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: "url('/background_solesplast.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

export default theme;
