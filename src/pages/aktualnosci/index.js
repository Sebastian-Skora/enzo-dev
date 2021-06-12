import React from 'react';
import Layout from '../../components/layout/layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SubpageHeader from '../../components/smallComponents/SubpageHeader/SubpageHeader';
import { Link } from 'gatsby'
export default function Aktualnosci({ data }) {
  console.log(data.allMarkdownRemark.edges)
  return (
    <Layout>
      <SubpageHeader>Aktualnosci</SubpageHeader>
      <NewsWrapper>

        {data ? data.allMarkdownRemark.edges.map((post) => (<article><div>Data: {post.node.frontmatter.date}</div><h1>{post.node.frontmatter.title}</h1><p>{post.node.frontmatter.description}</p><StyledLink href={`/aktualnosci${post.node.fields.slug}`}><CustomButton>Czytaj dalej</CustomButton></StyledLink></article>)) : <h1>'brak danych'</h1>}

      </NewsWrapper>
    </Layout >
  )

}

const StyledLink = styled(Link)`
color: none;
`


const NewsWrapper = styled.section`
min-height:50vh;
margin: auto;
width: 100vw;
display: flex;
padding: 50px 10px;
justify-content: center;
flex-wrap: wrap;
position: relative;
article {
    border: 4px solid #f5f5f5;
    position: relative;
    display: flex;
    background-color: #f5f5f5;
    box-shadow: 0 0.5em 1em -0.125em rgb(43 37 35 / 10%), 0 0 0 1px rgb(43 37 35 / 2%);
    padding: 30px;
flex:1;
max-height: 320px;
    margin: 10px;
align-items: stretch;
    flex-direction: column;
    justify-content: flex-start;
  
    }
    div {
        align-self: flex-end;
    }
    p {
      position: relative;
      /* max-width: 80%; */
      /* word-wrap: break-word; */
    }
    
}

`
const CustomButton = styled.button`
    color: white;
    transition: 0.15s linear;
    background-color: #bfa67a;
    border: 3px solid #bfa67a;
    width: auto;
    margin-top: 30px;
    padding: 13px 30px;
    font-weight: 700;
    width: 180px;
    font-size: 14px;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    bottom: 13px;
    left: 13px;
    &:hover {
      background-color: #000;
      border: 3px solid #000;
    }
`

export const postQuery = graphql`
query postsQuery {
    allMarkdownRemark {
      edges {
        node {
        fields{
                slug
            }
          frontmatter {
            featuredImage
            date
            description
            title
          }
        }
      }
    }
  }
  
`



