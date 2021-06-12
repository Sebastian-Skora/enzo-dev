import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import styled from 'styled-components';
import SubpageHeader from '../components/smallComponents/SubpageHeader/SubpageHeader';
import { Link } from 'gatsby';
export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SubpageHeader>{post.frontmatter.title}</SubpageHeader>
      <SectionWrapper>
        {/* {data ? <h1>{post.frontmatter.title}</h1> : <h1>Brak danych!</h1>}
       */}
        <Link href="/aktualnosci"><CustomButton><i class="fas fa-arrow-circle-left" style={{ marginRight: "5px", fontSize: "16px" }}></i>Cofnij</CustomButton></Link>
        <h1>{post.frontmatter.description}</h1>
        <h1>{post.frontmatter.body}</h1>

      </SectionWrapper>
    </Layout>
  )

}

const SectionWrapper = styled.section`
min-height: 80vh;
width:100vw;
padding: 0px 50px;
display: flex;
flex-direction: column;
`

const CustomButton = styled.button`
    color: white;
    transition: 0.15s linear;
    background-color: #bfa67a;
    border: 3px solid #bfa67a;
    width: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 13px 30px;
    font-weight: 700;
    width: 180px;
    font-size: 14px;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    align-self: center;
    &:hover {
      background-color: #000;
      border: 3px solid #000;
    }
`


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


export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`