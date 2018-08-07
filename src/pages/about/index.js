import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.css";
const ContentContainer = styled.div`
  margin: 3rem auto;
  max-width: 960px;
  font-family: "Brandon Grotesque";
  @media (max-width: 960px) {
    max-width: 640px;
  }
  @media (max-width: 640px) {
    max-width: 420px;
  }
  @media (max-width: 420px) {
    max-width: 320px;
  }
`;

const Intro = styled.h1`
  font-family: "Brandon Grotesque";
  font-size: 3rem;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 30px;
  }
`;

const BlogContent = styled.div`
  font-family: "Brandon Grotesque Regular";
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  place-items: center;
  margin-top: 100px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  background-image: none;
  color: #141414;
`;

export default () => (
  <ContentContainer>
    <Intro>About</Intro>
    <BlogContent>
      Hi, my name is Pratik Chakravorty and I am a full-stack developer
      currently living in Cork, Ireland. I love to experiment and build things.
      When I am not coding I enjoy watching anime and playing video games. My
      current stack is React in the front-end, Redux as my state management
      library and Express with MongoDB in the backend.
    </BlogContent>
    <Grid>
      <SocialLink href="https://medium.com/@pratikch1253" target="_blank">
        <i className="fab fa-medium-m fa-2x" />
      </SocialLink>
      <SocialLink href="https://twitter.com/pratzc07" target="_blank">
        <i className="fab fa-twitter fa-2x" />
      </SocialLink>
      <SocialLink href="https://github.com/pratik-chakravorty" target="_blank">
        <i className="fab fa-github fa-2x" />
      </SocialLink>
    </Grid>
  </ContentContainer>
);
