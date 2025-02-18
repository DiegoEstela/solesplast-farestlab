import { styled } from "@mui/material/styles";

export const PageContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

export const ContentWrapper = styled("div")(() => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: " 20px 0px",
}));
