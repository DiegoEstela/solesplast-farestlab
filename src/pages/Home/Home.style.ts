import { styled } from "@mui/material/styles";

export const HomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "70px",
  gap: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  minHeight: "80vh",
}));

export const MetricsContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "70%",
}));

export const MetricWidget = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  borderRadius: "16px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[900],
  minWidth: "140px",
  minHeight: "120px",
  textAlign: "center",
}));

export const QuickAccessContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  justifyContent: "center",
  marginTop: theme.spacing(-2),
}));

export const QuickAccessButton = styled("button")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1),
  borderRadius: "12px",
  backgroundColor: "transparent",
  cursor: "pointer",
  border: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover svg": {
    transform: "scale(1.15)",
  },
}));

export const QuickAccessIcon = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  backgroundColor: theme.palette.grey[300],
  padding: theme.spacing(1),
}));
