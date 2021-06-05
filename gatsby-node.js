const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    // createPage({
    //     path: "/aktualnosci",
    //     component: path.resolve(`./src/pages/aktualnosci`)
    // })

    return graphql(`{
         allMarkdownRemark {
             edges {
                 node {
                     frontmatter {
                         path
                     }
                 }
             }
         }
     }`)
        .then(res => {
            if (res.errors) {
                return Promise.reject(res.errors)
            }

            res.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: path.resolve(`./src/pages/templates/test.js`)
                })
            })
        })
}