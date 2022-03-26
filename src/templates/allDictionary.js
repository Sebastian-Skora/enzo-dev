import React from "react";
import Layout from "../components/layout/layout";
import SubpageHeader from "../components/smallComponents/SubpageHeader/SubpageHeader";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import SEO from "../components/smallComponents/seo";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

const allDictionary = ({ data, pageContext, modeRedux }) => {
  console.log(pageContext, "pagecontext");
  return (
    <>
      <SEO
        title="Słownik pojęć IT"
        description={`Poznaj nasz słownik IT i dowiedz się wielu informacji z tego
        zakresu. - Enzo development, enzo-dev`}
      />
      <Layout disableContact>
        <SubpageHeader>Słownik pojęć</SubpageHeader>
        <Fade>
          <SectionWrapper modeRedux={modeRedux}>
            <div className="description_container">
              <h1>
                Poznaj nasz słownik IT i dowiedz się wielu informacji z tego
                zakresu
              </h1>
              <p>Ponizej znajdują się wszelkie informacjie na ten temat</p>
            </div>

            <div className="container">
              {data
                ? data.allMarkdownRemark.edges.map((post) => {
                    const { frontmatter: element } = post.node;
                    return (
                      <Link
                        to={`co-to-jest-${post.node.fields.slug.slice(9)}`}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          margin: "20px",
                        }}
                      >
                        <Tile modeRedux={modeRedux}>
                          <div className="watermark">{element.title}</div>
                          <h3>{element.title}</h3>
                        </Tile>
                      </Link>
                    );
                  })
                : "brak danych"}
            </div>
            <PageSelector
              modeRedux={modeRedux}
              pageContext={pageContext}
              data={data}
            />
          </SectionWrapper>
        </Fade>
      </Layout>
    </>
  );
};

function PageSelector(props) {
  const { modeRedux } = props;
  const { currentPage, numPagesDictionary } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPagesDictionary;
  const prevPage =
    currentPage - 1 === 1 ? "/slownik/" : `/slownik/page/${currentPage - 1}`;
  const nextPage = `/slownik/page/${currentPage + 1}`;
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
        {Array.from({ length: numPagesDictionary }, (_, i) => (
          <li key={`pagination-number${i + 1}`} style={{}}>
            <Link
              to={`/slownik/${i !== 0 ? "page/" : ""}${i === 0 ? "" : i + 1}`}
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
    height: 100%;
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
  query dictionaryListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "dictionary" } } }
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

export default connect(mapStateToProps, null)(allDictionary);
