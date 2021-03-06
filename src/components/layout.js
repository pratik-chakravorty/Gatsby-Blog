import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Transition from "./transition";

import "prismjs/themes/prism-solarizedlight.css";
import "./layout.css";

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

const LogoLink = styled(Link)`
  font-family: "Brandon Grotesque";
  background-image: none;
  font-size: 2rem;
  color: #141414;
  margin-top: 5px;
  border: 2px solid #141414;
  padding: 5px;
  border-radius: 4px;
  margin-right: auto;
  &:hover {
    color: #663399;
    border-color: #663399;
  }
  @media (max-width: 600px) {
    margin: 20px auto;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.7rem;
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
      margin: 20px auto;
    }
  }
`;

export default ({ children }) => (
  <div>
    <Navigation />
    <Container>
      <LogoLink to="/">PC</LogoLink>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </Container>
    <Transition>{children}</Transition>
  </div>
);
