import React from "react";
import Layout from "../components/layout/layout";
import SubpageHeader from "../components/smallComponents/SubpageHeader/SubpageHeader";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import SEO from "../components/smallComponents/seo";
import Fade from "react-reveal/Fade";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { connect } from "react-redux";

const allPortfolio = ({ data, pageContext, modeRedux }) => {
  console.log(pageContext, "pageContext");
  return (
    <>
      <SEO
        title="Portfolio"
        description={`Zobacz osoby, które nam zaufały. Dołącz do grona zadowolonych klientów! - eSwipe`}
      />
      <Layout disableContact>
        <SubpageHeader>Portfolio</SubpageHeader>

        <PortfolioWrapper modeRedux={modeRedux}>
          <div className="description_container">
            <h1>Nasze ostatnie realizacje</h1>
          </div>
          <div className="band">
            {data ? (
              data.allMarkdownRemark.edges.map((post, i) => {
                const image = getImage(post.node.frontmatter.featuredimage);
                return (
                  <>
                    <a
                      href={post.node.frontmatter.description}
                      className={`${i === 0 ? "card item-1" : "card"}`}
                      target="_blank"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="img-wrapper">
                        <GatsbyImage
                          image={image}
                          alt={post.node.frontmatter.title}
                        />
                      </div>
                    </a>

                    {/* <div className="card">
                        <Link
                          to={post.node.fields.slug}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <GatsbyImage
                            image={image}
                            alt={post.node.frontmatter.title}
                            imgStyle={{ width: "50%", height: "50%" }}
                          />
                        </Link>
                      </div> */}
                  </>
                );
              })
            ) : (
              <h3>'brak danych'</h3>
            )}
          </div>
        </PortfolioWrapper>

        <PageSelector
          modeRedux={modeRedux}
          data={data}
          pageContext={pageContext}
        />
      </Layout>
    </>
  );
};

function PageSelector(props) {
  const { modeRedux } = props;
  const { currentPage, numPagesPortfolio } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPagesPortfolio;
  const prevPage =
    currentPage - 1 === 1
      ? "/portfolio/"
      : `/portfolio/page/${currentPage - 1}`;
  const nextPage = `/portfolio/page/${currentPage + 1}`;
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
        {Array.from({ length: numPagesPortfolio }, (_, i) => (
          <li key={`pagination-number${i + 1}`} style={{}}>
            <Link
              to={`/portfolio/${i !== 0 ? "page/" : ""}${i === 0 ? "" : i + 1}`}
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
  height: 10vh;
`;

const PortfolioWrapper = styled.section`
  .description_container {
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 60px;
    padding-top: 40px;

    h1 {
      color: ${(props) => (props.modeRedux ? "#F5F5F5" : "black")};
      font-size: 24px;
      padding-bottom: 40px;
      position: relative;
      &::after {
        content: "";
        left: calc(50% - 24px);
        position: absolute;
        background-color: #e8e8e8;
        width: 48px;
        height: 3px;
        bottom: 25px;
      }
    }
    p {
      font-size: 15px;
      color: ${(props) => (props.modeRedux ? "#B1B1B1" : "#7A7A7A")};
    }
  }
  transition: 0.15s background-color linear;
  min-height: 50vh;
  @media (max-width: 680px) {
    min-height: 45vh;
  }
  background-color: ${(props) => (props.modeRedux ? "#252525" : "#fff")};
  width: 100%;
  padding: 60px 0;

  .card {
    background: white;
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgb(0 0 0 / 30%);
    background-color: ${(props) => (props.modeRedux ? "#383838" : "#fff")};
    display: flex;
    flex-direction: column;
    min-height: 240px;
    // sets up hover state
    position: relative;
    top: 0;
    transition: all 0.1s ease-in;
    &.item-1 {
      grid-column: 1/3;
      grid-row: 1/3;
      height: 100%;
      @media (max-width: 479px) {
        grid-column: 1/2;
        grid-row: 1/2;
      }
    }
    .img-wrapper {
      display: flex;
      align-items: center;
      width: 50%;
      height: 50%;
      position: relative;
    }
    &:hover {
      box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.34);
      transform: scale(1.05);
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
      background-size: contain;
      background-position: center center;
    }
  }
  .band {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;

    grid-gap: 50px;
    width: 90%;
    @media (min-width: 30em) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 60em) {
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const SectionWrapper = styled.section`
  width: 100vw;
  min-height: 50vh;
  @media (max-width: 680px) {
    min-height: 35vh;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.modeRedux ? "#252525" : "#fff")};
  transition: 0.15s linear;
  h3 {
    font-size: 22px;
  }
  .description_container {
    padding-top: 100px;
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;

    h1 {
      color: ${(props) => (props.modeRedux ? "#F5F5F5" : "black")};
      font-size: 24px;
      padding-bottom: 40px;
      position: relative;
      &::after {
        content: "";
        left: calc(50% - 24px);
        position: absolute;
        background-color: #e8e8e8;
        width: 48px;
        height: 3px;
        bottom: 25px;
      }
    }
    p {
      font-size: 15px;
      color: ${(props) => (props.modeRedux ? "#B1B1B1" : "#7A7A7A")};
    }
  }
  .container {
    padding: 60px 0;
    width: 90%;
    min-height: 80vh;
    max-width: 1280px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 680px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
`;

const Tile = styled.div`
  // width: 380px;
  height: 240px;
  margin: 10px;
  padding: 30px;
  position: relative;
  background-color: ${(props) => (props.modeRedux ? "#383838" : "#fff")};
  transition: 0.15s linear;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  border-bottom: ${(props) =>
    props.modeRedux ? "2px solid #837255" : "2px solid #bfa67a"};
  h3 {
    color: ${(props) => (props.modeRedux ? "#F5F5F5" : "black")};
  }
  p {
    margin-top: 10px;
    line-height: 1.35;
    letter-spacing: 0.5px;
  }
  &:hover {
    transform: translateY(-20px);
    cursor: pointer;
    background-color: ${(props) => (props.modeRedux ? "#333333" : "#f2f2f2")};
  }
  .watermark {
    position: absolute;
    top: 40%;
    width: calc(100% - 30px);
    overflow: hidden;
    height: 50%;
    font-size: 120px;
    color: #4f4f4f;
    opacity: ${(props) => (props.modeRedux ? "0.1" : "0.035")};
  }
`;

export const pageQuery = graphql`
  query porfolioListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "portfolio" } } }
      sort: { fields: frontmatter___title, order: ASC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            description
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

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(allPortfolio);
