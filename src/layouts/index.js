import React from "react";
import styled, { injectGlobal } from "styled-components";
import Link from "gatsby-link";

require("prismjs/themes/prism-solarizedlight.css");

injectGlobal`
@font-face {
  font-family: 'Brandon Grotesque';
  src: url('./public/fonts/Brandon_med_it.otf');
}

 body {
     margin:0;
     background:#FBFAFC;
     font-family:'Brandon Grotesque';
 }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1200px;
  @media (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 320px;
    flex-direction: column;
  }
`;

const Navigation = styled.div`
  background: #663399;
  height: 9px;
  width: 100%;
`;

const Logo = styled.h1`
  font-family: "Brandon Grotesque";
  font-size: 1.7rem;
  color: #141414;
  margin-top: 5px;
  padding: 0;
  margin-right: auto;
  @media (max-width: 600px) {
    margin: 20px auto;
  }
`;

const StyledLink = styled(Link)`
  color: #9d7cbf;
  background: none;
  text-shadow: none;
  font-weight: bold;
  display: flex;
  margin-right: 50px;
  align-items: center;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 600px) {
    margin-right: 0;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 20px;
    &:last-child {
      margin: 0 auto;
    }
  }
`;

export default ({ children }) => (
  <div>
    <Navigation />
    <Container>
      <Logo>PC</Logo>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Container>
    {children()}
  </div>
);
