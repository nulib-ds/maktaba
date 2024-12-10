import { FooterContent, FooterStyled } from "./Footer.styled";

import Container from "../Shared/Container";
import FooterLogos from "../Custom/FooterLogos";
import React from "react";

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterContent>
          <FooterLogos />
        </FooterContent>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
