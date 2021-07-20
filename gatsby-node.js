const path = require('path');
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')



exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // createPage({
  //     path: "/aktualnosci",
  //     component: path.resolve(`./src/pages/aktualnosci`)
  // })


  return graphql(`  {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
                templateKey
              }
            }
          }
        }
      }`).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: `aktualnosci${edge.node.fields.slug}`,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          // `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          'src/templates/post.js'
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
    let tags = [];
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    tags = _.uniq(tags)
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })

}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}