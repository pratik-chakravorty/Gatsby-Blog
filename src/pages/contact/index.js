import React from "react";
import styled, { injectGlobal } from "styled-components";

const ContentContainer = styled.div`
  margin: 3rem auto;
  max-width: 960px;
`;

export default () => (
  <ContentContainer>
    <h1>Contact Me</h1>
    <p>Contact Me please...</p>
  </ContentContainer>
);
