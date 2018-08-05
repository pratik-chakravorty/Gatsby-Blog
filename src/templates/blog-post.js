import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const ContentContainer = styled.div`
  margin: 3rem auto;
  max-width: 960px;
  @media (max-width: 870px) {
    max-width: 640px;
  }
  @media (max-width: 640px) {
    max-width: 420px;
  }
  @media (max-width: 473px) {
    max-width: 340px;
  }
`;
const PostTitle = styled.h1`
  font-family: "Brandon Grotesque";
`;

const BlogContent = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
      <ContentContainer>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </ContentContainer>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 960) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
