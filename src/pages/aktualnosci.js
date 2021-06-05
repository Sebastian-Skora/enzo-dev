import React from 'react';
import Layout from '../components/layout/layout';
import styled from 'styled-components';
import News from '../components/pagesReact/news/News';
import { graphql } from 'gatsby';

export default function Aktualnosci({ data }) {
    return (
        <Layout>
            <NewsWrapper>
                {data.allMarkdownRemark.nodes.map((post) => (<article><p>data {post.frontmatter.date}</p><h1>{post.frontmatter.title}</h1><p>opis: {post.frontmatter.description}</p></article>))}
            </NewsWrapper>
        </Layout>
    )

}


const NewsWrapper = styled.section`
height:80vh;
width: 100vw;
padding-top: 150px;
padding-left: 15px;
`

export const postQuery = graphql`
query postsQuery{
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



