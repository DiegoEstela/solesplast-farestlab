import { styled } from "@mui/material/styles";

export const FooterContainer = styled("footer")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.grey[800],
  color: "white",
  textAlign: "center",
  padding: "10px 0",
  position: "relative",
  marginTop: "auto",
  flexShrink: 0,
}));
