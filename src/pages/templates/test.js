import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { allMarkdownRemark: post } = data;
  console.log('data', data.allMarkdownRemark.nodes.forEach((ele) => { console.log(ele.frontmatter.title) }))
  let array = ['sdad', 'dsadada'];
  return (
    <div>
      {data.allMarkdownRemark.nodes.map((post) => (<h1>{post.frontmatter.title}</h1>))}
    </div>
  )

}


export const postQuery = graphql`
query postQuery{
  allMarkdownRemark {
    nodes {
      frontmatter {
        description
        title
        path
        date
      }
    }
  }
}

  
`