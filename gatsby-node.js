//extract the name of the blog posts from the md files.
const { createFilePath } = require("gatsby-source-filesystem");
//needed to get the path of the template file
const path = require("path");

//Gatsby API that creates a node. We use it to create a slug.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    //we need the names of each of the md files and create slugs
    //for example if we have example-post.md as a file we need to make /example-post
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            //data passed here is available in page queries using graphql
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
