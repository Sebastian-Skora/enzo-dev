import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { connect } from "react-redux";
import Layout from "../components/layout/layout";
import SEO from "../components/smallComponents/seo";
import SubpageHeader from "../components/smallComponents/SubpageHeader/SubpageHeader";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "dayjs/locale/pl";
import dayjs from "dayjs";
import Fade from "react-reveal/Fade";
function Blog({ data, modeRedux, pageContext }) {
  return (
    <>
      <SEO
        title="Blog - artykuły IT"
        description={`Nowości technologiczne ze świata IT. Nasz blog z pomocnymi informacjami internetowymi. - Enzo development, enzo-dev`}
      />
      <Layout disableContact>
        <SubpageHeader>
          <h1 style={{ fontSize: "26px" }}>Blog</h1>
        </SubpageHeader>

        <NewsWrapper shadow_mode={modeRedux}>
          <div className="band">
            {data ? (
              data.allMarkdownRemark.edges.map((post, i) => {
                const image = getImage(post.node.frontmatter.featuredimage);
                return (
                  <>
                    <div className={`${i === 0 && "item-1"}`}>
                      <Link to={post.node.fields.slug} className="card">
                        <GatsbyImage
                          image={image}
                          alt={post.node.frontmatter.title}
                        />
                        <article>
                          <h3>{post.node.frontmatter.title}</h3>
                          <p>
                            {post.node.frontmatter.description.slice(0, 140) +
                              "..."}
                          </p>
                          <span>
                            {dayjs(post.node.frontmatter.date)
                              .locale("pl")
                              .format("D MMMM YYYY")}
                          </span>
                        </article>
                      </Link>
                    </div>
                  </>
                );
              })
            ) : (
              <h3>'brak danych'</h3>
            )}
          </div>
        </NewsWrapper>

        <PageSelector
          modeRedux={modeRedux}
          data={data}
          pageContext={pageContext}
        />
      </Layout>
    </>
  );
}

function PageSelector(props) {
  const { modeRedux } = props;
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;
  return (
    <PageSelectorWrapper modeRedux={modeRedux}>
      <ul
        style={{
          maxWidth: "800px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          listStyle: "none",
          padding: "25px",
          backgroundColor: modeRedux ? "#383838" : "#f7f7f7",
          transition: "0.15s linear",
        }}
      >
        {!isFirst && (
          <Link
            to={prevPage}
            rel="prev"
            style={{
              textDecoration: "none",
              fontWeight: isFirst ? "700" : "400",
              border: isFirst ? "2px solid #bfa67a" : "none",
              color: modeRedux ? "#ffffff" : "black",
            }}
          >
            ← Poprzednia strona
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`} style={{}}>
            <Link
              to={`/blog/${i !== 0 ? "page/" : ""}${i === 0 ? "" : i + 1}`}
              activeStyle={{
                fontWeight: 700,
                border: "2px solid #bfa67a",
                color: "#bfa67a",
              }}
              style={{
                color: modeRedux ? "#ffffff" : "black",
                padding: "10px",
                textDecoration: "none",
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link
            to={nextPage}
            rel="next"
            style={{
              textDecoration: "none",
              color: modeRedux ? "#ffffff" : "black",
            }}
          >
            Nastepna strona →
          </Link>
        )}
      </ul>
    </PageSelectorWrapper>
  );
}

const PageSelectorWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.modeRedux ? "#383838" : "#f7f7f7")};
  transition: 0.15s linear;
`;

const NewsWrapper = styled.section`
  transition: 0.15s background-color linear;
  min-height: 50vh;
  @media (max-width: 680px) {
    min-height: 45vh;
  }
  background-color: ${(props) => (props.shadow_mode ? "#252525" : "#fff")};
  width: 100%;
  padding: 60px 0;
  .item-1 {
    @media (min-width: 60em) {
      grid-column: 1 / span 2;
      h1 {
        font-size: 24px;
      }
    }
  }
  .card {
    background: white;
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    min-height: 100%;
    // sets up hover state
    position: relative;
    top: 0;
    transition: all 0.1s ease-in;
    &:hover {
      top: -2px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    }
    article {
      padding: 20px;
      flex: 1;
      background-color: ${(props) => props.shadow_mode && "#383838"};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: 0.15s linear;
    }
    h3 {
      font-size: 20px;
      margin: 0;
      transition: 0.15s linear;
      color: ${(props) => (props.shadow_mode ? "#F5F5F5" : "#333")};
    }
    p {
      padding-top: 25px;
      flex: 1;
      line-height: 1.4;
      color: ${(props) => (props.shadow_mode ? "#B1B1B1" : "black")};
      transition: 0.15s linear;
    }
    span {
      font-size: 12px;
      font-weight: bold;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 2em 0 0 0;
    }
    .thumb {
      padding-bottom: 60%;
      background-size: cover;
      background-position: center center;
    }
  }
  .band {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    width: 90%;
    @media (min-width: 30em) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 60em) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            description
            templateKey
            title
            featuredimage {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;

export default connect(mapStateToProps, null)(Blog);
