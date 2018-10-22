import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Disqus from "disqus-react";

import {
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";

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

const SocialShare = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  place-items: center;
`;
const PostTitle = styled.h1`
  color: #141414;
  font-family: "Brandon Grotesque";
`;

const BlogContent = styled.div`
  font-family: "Brandon Grotesque Regular";
  font-size: 1.5rem;
  line-height: 2.5rem;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;
export default ({ data, location }) => {
  const hostname = `pratiks-blog.netlify.com`;
  const shareUrl = "https://" + hostname + location.pathname;
  const post = data.markdownRemark;
  const disqusShortname = "pratiks-blog-netlify-com";
  const disqusConfig = {
    identifier: `${location.pathname}`,
    title: post.frontmatter.title
  };
  return (
    <Layout>
      <div>
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        <ContentContainer>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
          <SocialShare>
            <TwitterShareButton
              url={shareUrl}
              title={post.frontmatter.title}
              className="button"
            >
              <TwitterIcon size={50} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton
              url={shareUrl}
              title={post.frontmatter.title}
              className="button"
            >
              <LinkedinIcon size={50} round={true} />
            </LinkedinShareButton>
            <FacebookShareButton
              url={shareUrl}
              title={post.frontmatter.title}
              className="button"
            >
              <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
          </SocialShare>
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </ContentContainer>
      </div>
    </Layout>
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
