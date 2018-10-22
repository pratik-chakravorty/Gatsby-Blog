import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const ContentContainer = styled.div`
  margin: 3rem auto;
  max-width: 640px;
  @media (max-width: 640px) {
    max-width: 480px;
  }
  @media (max-width: 473px) {
    max-width: 320px;
  }
`;

const Intro = styled.p`
  font-size: 3rem;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

const Card = styled.div`
  font-family: "Brandon Grotesque Regular";
  background: #fff;
  font-size: 1.2rem;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.08);
  padding: 1rem 1.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  margin-bottom: 40px;
  &:hover {
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.08);
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  background: none;
  margin-bottom: 10px;
`;

const PostTitle = styled.h1`
  font-family: "Brandon Grotesque";
`;
export default ({ data }) => (
  <Layout>
    <div>
      <ContentContainer>
        <Intro>Hi, My name is Pratik and welcome to my blog.</Intro>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <StyledLink to={node.fields.slug} key={index}>
              <Card>
                <Img
                  sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                />
                <PostTitle>{node.frontmatter.title} </PostTitle>
                <p>{node.excerpt}</p>
                <span style={{ color: "#666666", fontSize: "15px" }}>
                  Pratik Chakravorty on {node.frontmatter.date}
                </span>
              </Card>
            </StyledLink>
          );
        })}
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          Made With{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          using Gatsby
        </p>
      </ContentContainer>
    </div>
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: " Do MMMM YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 640) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
