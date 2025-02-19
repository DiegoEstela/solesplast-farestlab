import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StatusCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "140px",
  height: "110px",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.default,
  backdropFilter: "blur(10px)",
  boxShadow: theme.shadows[4],
  padding: "12px",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "scale(1.05)",
  },
}));
