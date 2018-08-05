import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  margin: 3rem auto;
  max-width: 960px;
`;

export default () => (
  <ContentContainer>
    <h1>About</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </ContentContainer>
);
