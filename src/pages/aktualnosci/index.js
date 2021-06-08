import React from 'react';
import Layout from '../../components/layout/layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SubpageHeader from '../../components/smallComponents/SubpageHeader/SubpageHeader';

export default function Aktualnosci({ data }) {
    return (
        <Layout>
            <SubpageHeader>Aktualnosci</SubpageHeader>
            <NewsWrapper>

                {data ? data.allMarkdownRemark.nodes.map((post) => (<article><div>Data: </div><h1></h1><p></p><CustomButton>Czytaj dalej</CustomButton></article>)) : <h1>'brak danych'</h1>}
            </NewsWrapper>
        </Layout >
    )

}


const NewsWrapper = styled.section`
min-height:80vh;
width: 100vw;
padding: 50px 30px;
position: relative;
article {
    border: 1px solid black;
    padding: 30px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    div {
        align-self: flex-end;
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
    &:hover {
      background-color: #000;
      border: 3px solid #000;
    }
`

// export const postQuery = graphql`
// query postsQuery{
//                     allMarkdownRemark {
//                     nodes {
//                     frontmatter {
//                     description
//         title
//         path
//         date
//       }
//     }
//   }
// }
// `



