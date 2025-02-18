import { Typography } from "@mui/material";
import { FooterContainer } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2">
        © 2024 Solesplast | Desarrollado por <strong>FarestLab</strong>
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
