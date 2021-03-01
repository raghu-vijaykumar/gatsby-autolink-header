const { createFilePath } = require(`gatsby-source-filesystem`);

const path = require(`path`);
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/BlogPostTemplate.jsx");
  return graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    const posts = result.data.allMarkdownRemark.nodes;
    // create page for each mdx file
    posts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
