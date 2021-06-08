import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div>
      <h1>{data ? post.frontmatter.title : 'brak danych'}</h1>
    </div>
  )

}

// export const postQuery = graphql`
// query postQueryByPath($path: String!){
//   markdownRemark(frontmatter: {path: {eq: $path}}) {
//    frontmatter {
//     path
//     title
//     description
//     date
//    }
//   }
// }
// `

  //
  // export const postQuery = graphql`
  // query postQuery{
  //   allMarkdownRemark {
  //     nodes {
  //       frontmatter {
  //         description
  //         title
  //         path
  //         date
  //       }
  //     }
  //   }
  // }

