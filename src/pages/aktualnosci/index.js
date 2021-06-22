import React from 'react';
import Layout from '../../components/layout/layout';
import styled from 'styled-components';
import Button from '../../components/smallComponents/Button/Button';
import { graphql } from 'gatsby';
import SubpageHeader from '../../components/smallComponents/SubpageHeader/SubpageHeader';
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import { connect } from 'react-redux'
import SEO from '../../components/smallComponents/seo';

function Aktualnosci({ data, modeRedux }) {
  const ButtonMode = modeRedux ? <SecondButton>Czytaj dalej</SecondButton> : <CustomButton>Czytaj dalej</CustomButton>

  return (
    <>
      <SEO title="Enzo Development - Aktualnosci" description="Nowości techonologiczne, nasz blog, arytkuły IT" />
      <Layout>
        <SubpageHeader>Aktualnosci</SubpageHeader>
        <NewsWrapper shadow_mode={modeRedux}>

          {data ? data.allMarkdownRemark.edges.map((post) => (<article><div className="date">Data: <span>{post.node.frontmatter.date.slice(0, 10)}</span></div><ImgWrapper><PreviewCompatibleImage
            imageInfo={{
              image: post.node.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
            }}
          /></ImgWrapper><h1>{post.node.frontmatter.title}</h1><p>{post.node.frontmatter.description}</p><StyledLink href={`/aktualnosci${post.node.fields.slug}`}>{ButtonMode}</StyledLink></article>)) : <h1>'brak danych'</h1>}

        </NewsWrapper>
        <PageSelector />
      </Layout >
    </>
  )

}


function PageSelector() {
  return (
    <div>1.2..3</div>
  )
}


const SecondButton = styled.button`
  background-color: transparent;
  color: white;
  transition: 0.15s linear;
  border: 3px solid #fff;
  padding: 13px 34px;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #bfa67a;
    border: 3px solid #bfa67a;
  }
`



const StyledLink = styled(Link)`
color: none;
margin-top: 15px;
width:185px;

`

const ImgWrapper = styled.div`
width: 300px;
align-self: flex-start;
height: 200px;
`


const NewsWrapper = styled.section`
min-height:50vh;
margin: auto;
width: 100vw;
background-color: ${props => props.shadow_mode ? "#252525" : "#fff"};
display: flex;
transition: 0.05s linear;
padding: 50px 10px;
justify-content: center;
@media (min-width: 768px) {
    justify-content: space-between;
  }
  @media (min-width: 1184px) {
    padding: 50px 80px;
  }
flex-wrap: wrap;
position: relative;

article {
    border: ${props => props.shadow_mode ? "4px solid rgb(56,56,56)" : "4px solid #f5f5f5"};
    position: relative;
    display: flex;
    transition: 0.15s linear;
    background-color: ${props => props.shadow_mode ? "#383838" : "#f5f5f5"};
    box-shadow: ${props => props.shadow_mode ? "0px 0px 1px 1px rgb(56 56 56 / 79%)" : "0 0.5em 1em -0.125em rgb(43 37 35 / 10%), 0 0 0 1px rgb(43 37 35 / 2%);"};
    padding: 30px;
flex:1;
max-height: 320px;
    margin: 10px;
align-items: stretch;
    flex-direction: column;
    /* justify-content: center; */
    @media (min-width: 895px) {
    /* justify-content: flex-start; */
    max-width: 48%;
    margin-bottom: 20px;
  }
  @media(min-width:1184px) {
    flex-basis: 50%;
    margin-bottom: 2.1%;
  }
  
    h1 {
      color: ${props => props.shadow_mode ? "#dfdfdf" : "black"};
    }
    .date {
        align-self: flex-end;
        padding-bottom: 10px;
        font-weight: bold;
        color: ${props => props.shadow_mode ? "#dfdfdf" : "black"};
        span {
          font-weight: bold;
          
        }
    }
    p {
      position: relative;
      color: ${props => props.shadow_mode ? "#dfdfdf" : "black"};
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


const mapStateToProps = state => {
  return {
    modeRedux: state.toggleMode,
  };
};

export const postQuery = graphql`
query postsQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
        fields{
                slug
            }
          frontmatter {
            featuredimage
            date
            description
            title
          }
        }
      }
    }
  }
  
`

export default connect(mapStateToProps, null)(Aktualnosci);


