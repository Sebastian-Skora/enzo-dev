import React, { useEffect } from 'react';
import { graphql, navigate } from 'gatsby';
import { connect } from 'react-redux'
import Layout from '../components/layout/layout';
import styled from 'styled-components';
import SubpageHeader from '../components/smallComponents/SubpageHeader/SubpageHeader';
import { Link } from 'gatsby';
import SEO from '../components/smallComponents/seo';
import Logo from '../assets/imgs/logo.png'
import { StyleSheetManager } from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
import 'dayjs/locale/pl'
import dayjs from 'dayjs';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  title,
  reduxMode,

}) => {
  const PostContent = contentComponent || Content
  const ButtonMode = reduxMode ? <SecondButton>← Blog</SecondButton> : <CustomButton>← Blog</CustomButton>

  return (
    <>

      <SubpageHeader>BLOG</SubpageHeader>
      <SectionWrapper dark_mode={reduxMode}>
        {/* {data ? <h1>{post.frontmatter.title}</h1> : <h1>Brak danych!</h1>}
   */}
        {/* <i class="fas fa-arrow-circle-left" style={{ marginRight: "5px", fontSize: "16px" }}></i> */}
        <StyledLink href="/blog/">{ButtonMode}</StyledLink>
        <ArticleHeader>
          <div className="container">
            <div className="article-title">
              <Title dark_mode={reduxMode}>
                {title}
              </Title>
              <div className="author">
                <img src={Logo} alt="Logo" />
                <div className="author-info">
                  <div className="author-details">
                    <AuthorName dark_mode={reduxMode}>Zespół Enzo</AuthorName>
                    <div className="author-publication">
                      <time>{dayjs(date).locale('pl').format('D MMMM, YYYY ')}</time>
                      <div className="author-break"></div>
                      <span>Firma IT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ArticleHeader>
        <ArticleBodyContainer darkMode={reduxMode}>

          <div className="article-body">
            <p className="description">{description}</p>
            <PostContent content={content} />
          </div>
        </ArticleBodyContainer>

      </SectionWrapper>
    </>
  )
}






function Template({ data, modeRedux, location }) {
  const { markdownRemark: post } = data;

  return (
    <>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
      <Layout disableContact>
        <BlogPostTemplate
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          date={post.frontmatter.date}
          contentComponent={HTMLContent}
          content={post.html}
          reduxMode={modeRedux}
        />
      </Layout>
    </>
  )

}

const AuthorName = styled.span`
color: ${props => props.dark_mode ? "#dcdcdc" : "#3d3f4c"};
font-family:Source Sans Pro,sans-serif;
font-size: 18px;
font-weight: 600;
`

const Title = styled.h1`
      font-size:48px;
      font-family: Abril Fatface,serif;
      box-sizing: inherit;
      padding: 0 16px;
      line-height: 52px;
      font-weight: 400;
      text-align: center;
      letter-spacing: -.98px;
      color: ${props => props.dark_mode ? "#dfdfdf" : "#3d3f4c"};
      @media(min-width: 768px) {
      font-size: 58px;
      padding: 0 24px;
      }
`

const CustomButton = styled.button`
    color: white;
    transition: 0.15s linear;
    background-color: #bfa67a;
    border: 3px solid #bfa67a;
    width: auto;
    margin-top: 0px;
  margin-bottom: 0px;
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

const SecondButton = styled.button`
  background-color: transparent;
  position: relative;
  color: white;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
  transition: 0.15s linear;
  border: 3px solid #fff;
  padding: 13px 34px;
  font-weight: 700;
  font-size: 16px;
  width: 180px;
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
width:185px;
height: 51px;
text-decoration: none;
`

const SectionWrapper = styled.section`
min-height: 80vh;
padding: 64px 24px;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${props => props.dark_mode ? "#252525" : "#fff"};
overflow-x: hidden;
transition: 0.15s linear;
margin: auto;
`

const ArticleBodyContainer = styled.div`
width: 100%;
max-width: 908px;
.article-body {
  padding: 0 16px;
  text-align: left;
  p {
    font-family: Source Sans Pro;
    color: ${props => props.darkMode ? "#dfdfdf" : "#3d3f4c"};
    @media(min-width: 641px) {
    font-size:20px;
    
    }
  }
}
`

const ArticleHeader = styled.header`
margin: 65px auto 35px;
max-width: 908px;
.container {
  .article-title{
      display:flex;
      align-items: center;
      flex-direction: column;
      @media(min-width: 1024px) {
        padding-bottom: 30px;
      }
    }
    .author {
        margin-top: 40px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        margin-right: 15px;
      }
      display: flex;
        .author-info {
          .author-details {
            box-sizing: inherit;
            .author-publication {
              color:#7a7d94;
              .author-break {
                display: inline-block;
                height: 14px;
                position: relative;
                top: 2px;
                margin: 0 8px;
                width: 1.5px;
                background-color: #8b8ea2;
              }
            } 
          }
        }
    }
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
        date
        title
        description
        tags
      }
    }
  }
`

const mapStateToProps = state => {
  return {
    modeRedux: state.toggleMode,
  };
};



export default connect(mapStateToProps, null)(Template)