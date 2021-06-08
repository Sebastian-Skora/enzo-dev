const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

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
                path: edge.node.fields.slug,
                tags: edge.node.frontmatter.tags,
                component: path.resolve(
                    // `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
                    'src/pages/templates/test.js'
                ),
                // additional data can be passed via context
                context: {
                    id,
                },
            })
        })
    })

}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}