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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPage = path.resolve("src/templates/allPosts.js");
  const DictionaryPage = path.resolve("src/templates/allDictionary.js");
  const PortfolioPage = path.resolve("src/templates/allPortfolio.js");

  const blogQuery = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "post" } } }
      ) {
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
  `);

  if (blogQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = blogQuery.data.allMarkdownRemark.edges;
  const postsPerPage = 4;
  const numPages = Math.ceil(posts.length / postsPerPage);

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

  posts.forEach((edge) => {
    const id = edge.node.id;

    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    });
  });

  const dictionaryQuery = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "dictionary" } } }
      ) {
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
  `);

  if (dictionaryQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const dictionarys = dictionaryQuery.data.allMarkdownRemark.edges;
  const dictionarysPerPage = 9;
  const numPagesDictionary = Math.ceil(dictionarys.length / dictionarysPerPage);

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

  dictionarys.forEach((edge) => {
    const id = edge.node.id;

    createPage({
      path: `/slownik/co-to-jest-${edge.node.fields.slug.slice(9)}`,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    });
  });

  const portfolioQuery = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "portfolio" } } }
      ) {
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
  `);

  if (portfolioQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const portfolios = portfolioQuery.data.allMarkdownRemark.edges;
  const portfoliosPerPage = 9;
  const numPagesPortfolio = Math.ceil(portfolios.length / portfoliosPerPage);

  Array.from({ length: numPagesPortfolio }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/portfolio/` : `/portfolio/page/${i + 1}`,
      component: path.resolve("src/templates/allPortfolio.js"),
      context: {
        limit: portfoliosPerPage,
        skip: i * portfoliosPerPage,
        numPagesPortfolio,
        currentPage: i + 1,
      },
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
