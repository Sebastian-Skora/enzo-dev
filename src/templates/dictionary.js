import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import SubpageHeader from "../components/smallComponents/SubpageHeader/SubpageHeader";
import styled from "styled-components";
import { connect } from "react-redux";
import SVG from "../components/assets/svgs/bibliography.svg";
import SEO from "../components/smallComponents/seo";

const dictionary = ({ modeRedux, data }) => {
  const titleChecker = (title) => {
    const chars = title.split("");

    for (let i = 0; i < 2; i++) {
      if (chars[i] === chars[i].toUpperCase()) {
        if (chars[1] === chars[1].toUpperCase()) {
          return title.toUpperCase();
        }
      } else {
        return title.toLowerCase();
      }
    }
  };

  const { markdownRemark: element } = data;
  const ButtonMode = modeRedux ? (
    <SecondButton>← Powrót do słownika</SecondButton>
  ) : (
    <CustomButton>← Powrót do słownika</CustomButton>
  );
  return (
    <>
      <SEO title={`Co to jest ${titleChecker(element.frontmatter.title)} ?`} />
      <Layout disableContact>
        <SubpageHeader>Słownik pojęć</SubpageHeader>
        <SectionWrapper modeRedux={modeRedux}>
          <div className="container">
            <div className="col-1">
              <h1>{element.frontmatter.title}</h1>
              <p>{element.frontmatter.description}</p>
              <Link to="/slownik/" style={{ textDecoration: "none" }}>
                {ButtonMode}
              </Link>
            </div>
            <div className="col-2">
              <img src={SVG} alt="słownik" />
            </div>
          </div>
        </SectionWrapper>
      </Layout>
    </>
  );
};

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
  padding: 13px 30px;
  font-weight: 700;
  font-size: 16px;
  width: 300px;
  outline: none;
  margin-top: 80px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #bfa67a;
    border: 3px solid #bfa67a;
  }
  @media (max-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

const CustomButton = styled.button`
  @media (max-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 60px;
  }
  color: white;
  transition: 0.15s linear;
  background-color: #bfa67a;
  border: 3px solid #bfa67a;
  width: auto;

  margin-bottom: 0px;
  padding: 13px 30px;
  font-weight: 700;
  width: 300px;
  font-size: 14px;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-top: 80px;
  align-self: center;
  &:hover {
    background-color: #000;
    border: 3px solid #000;
  }
`;

const SectionWrapper = styled.section`
  min-height: 50vh;
  @media (max-width: 680px) {
    min-height: 35vh;
  }
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.modeRedux ? "#252525" : "#fff")};
  transition: 0.15s linear;
  .container {
    display: flex;
    max-width: 1440px;
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }
  }
  .col-1,
  .col-2 {
    width: 50%;
    padding: 120px;
    @media (max-width: 1024px) {
      width: 100%;
      padding: 30px 50px;
    }
  }
  .col-1 {
    @media (max-width: 1024px) {
      padding: 30px 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
      }
    }
    p {
      line-height: 1.65;
      color: ${(props) => (props.modeRedux ? "#B1B1B1" : "#7A7A7A")};
      font-size: 1rem;
    }
    h1 {
      color: ${(props) => (props.modeRedux ? "#F5F5F5" : "black")};
      width: auto;
      margin-bottom: 60px;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        width: 80px;
        height: 3px;
        background-color: #bfa67a;
        left: 0;
        bottom: -10px;
      }
    }
  }
  .col-2 {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 380px;
      @media (max-width: 1024px) {
        width: 50%;
      }
      @media (max-width: 480px) {
        width: 65%;
      }
    }
  }
`;

export const pageQuery = graphql`
  query DictionaryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(dictionary);
