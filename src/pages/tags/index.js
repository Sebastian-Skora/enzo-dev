import React from 'react'
import { kebabCase } from 'lodash'
const Tags = ({ data: {
    allMarkdownRemark: { group },
    site: {
        siteMetadata: { title },
    },
}, }) => {
    return (
        <div>
            <h1>Tags</h1>
        </div>
    )
}


export default Tags


export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`