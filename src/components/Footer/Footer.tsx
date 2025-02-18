import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Oscuro pero transparente
        backdropFilter: "blur(10px)", // Efecto vidrio esmerilado
        padding: "10px 0",
        color: theme.palette.text.secondary, // Texto en gris claro desde theme
        fontSize: "14px",
      }}
    >
      <Typography variant="body2">
        © 2024 Solesplast | Desarrollado por <strong>FarestLab</strong>
      </Typography>
    </Box>
  );
};

export default Footer;
