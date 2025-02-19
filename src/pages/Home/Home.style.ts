import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

export const HomeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "78vh",

  backgroundColor: theme.palette.background.default,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(3),
  fontSize: theme.typography.h5.fontSize,
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  maxWidth: "800px", // Ajusta mejor la grilla al centro
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // Por defecto 2 columnas
  gap: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)", // En desktop 3 columnas
  },
}));
