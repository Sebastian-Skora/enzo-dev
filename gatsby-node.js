const path = require("path");
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-particle-animation/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // createPage({
  //     path: "/aktualnosci",
  //     component: path.resolve(`./src/pages/aktualnosci`)
  // })

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }
    const posts = result.data.allMarkdownRemark.edges.filter((element) => {
      return element.node.frontmatter.templateKey === "post";
    });

    const postsPerPage = 4;
    const numPages = Math.ceil(posts.length / postsPerPage);

    const dictionarys = result.data.allMarkdownRemark.edges.filter(
      (element) => {
        return element.node.frontmatter.templateKey === "dictionary";
      }
    );

    const allTemplateKeys = result.data.allMarkdownRemark.edges;

    const dictionarysPerPage = 9;
    const numPagesDictionary = Math.ceil(
      dictionarys.length / dictionarysPerPage
    );

    allTemplateKeys.forEach((edge) => {
      const id = edge.node.id;

      createPage({
        path: `${
          edge.node.frontmatter.templateKey === "dictionary"
            ? `/slownik/co-to-jest-${edge.node.fields.slug.slice(9)}`
            : edge.node.fields.slug
        }`,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    Array.from({ length: numPages }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/blog/` : `/blog/page/${i + 1}`,
        component: path.resolve(
          // `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          "src/templates/allPosts.js"
        ),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
    Array.from({ length: numPagesDictionary }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/slownik/` : `/slownik/page/${i + 1}`,
        component: path.resolve(
          // `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          "src/templates/allDictionary.js"
        ),
        context: {
          limit: dictionarysPerPage,
          skip: i * dictionarysPerPage,
          numPagesDictionary,
          currentPage: i + 1,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
