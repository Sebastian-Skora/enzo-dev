import React from "react";
import * as styles from "./HeroPage.module.scss";
import Fade from "react-reveal/Fade";
import WordsSlider from "./WordsSlider/WordsSlider";
import HeroPageSVG from "../../../assets/svgs/hero_page3.svg";
import StarsSVG from "../../../assets/svgs/stars.svg";
import { connect } from "react-redux";
import { Link as NavLink } from "gatsby";
import styled, { keyframes } from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
const HeroPage = ({ modeRedux }) => {
  return (
    <HeroPageWrapper modeRedux={modeRedux}>
      <div className="background"></div>
      <Fade>
        <div className="inside">
          <div className="text">
            <h2>#Enzo Development</h2>
            <span></span>
            <h1>Strony/Sklepy internetowe i aplikacje mobilne</h1>
            <div className="buttons">
              <ButtonWrapper>
                <StyledLinkUslugi to="/uslugi/" modeRedux={modeRedux}>
                  Usługi
                </StyledLinkUslugi>
              </ButtonWrapper>
              <ButtonWrapper>
                <StyledLinkWycena to="/kontakt/" modeRedux={modeRedux}>
                  Darmowa wycena <FaLongArrowAltRight />
                </StyledLinkWycena>
              </ButtonWrapper>
            </div>
          </div>

          <div className="image">
            <img src={HeroPageSVG} />
          </div>

          <div className="stars">
            <img src={StarsSVG} />
          </div>
        </div>
      </Fade>
    </HeroPageWrapper>
  );
};

const ButtonWrapper = styled.div``;

// const StyledLink = styled(NavLink)`
//   cursor: pointer;
//   z-index: 3;
//   text-decoration: none;
//   transition: 0.3s linear;
// `;
const StyledLinkUslugi = styled(NavLink)`
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.modeRedux ? "3px solid white" : "3px solid gray"};
  color: ${(props) => (props.modeRedux ? "white" : "grey")};
  transition: 0.15s linear;
  padding: 25px;
  text-transform: uppercase;
  @media (max-width: 850px) {
    padding: 20px;
  }
  @media (max-width: 364px) {
    font-size: 14px;
    height: 65px;
    padding: 10px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
  font-size: 16px;
  font-weight: 700;
  margin: 5px;
  height: 80px;
  &:hover {
    background-color: #000;
    border: 3px solid #000;
    color: white;
  }
`;

const StyledLinkWycena = styled(NavLink)`
  box-sizing: border-box;
  margin: 5px;
  // border: 3px solid #bfa67a;
  height: 80px;
  padding: 25px;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.15s linear;
  @media (max-width: 400px) {
    font-size: 14px;
  }
  @media (max-width: 364px) {
    font-size: 14px;
    height: 65px;
    padding: 10px;
  }
  &:hover {
    background-color: #000;
  }
  font-weight: 700;
  display: flex;
  align-items: center;
  color: white;
  background-color: #bfa67a;

  justify-content: center;
  /* background-color: #35d835; */
  @media (max-width: 850px) {
    padding: 20px;
    font-size: 16px;
  }

  &.offer {
    background-color: transparent;
    border: ${(props) =>
      props.modeRedux ? "3px solid white" : "3px solid gray"};
    color: ${(props) => (props.modeRedux ? "white" : "grey")};
  }
`;

const flowingAnimation = keyframes`
0% {
  transform: translateY(1%);
}
100% {
  transform: translateY(-1%);
}
`;

const HeroPageWrapper = styled.section`
  width: 100vw;
  transition: 0.15s linear;
  min-height: 95vh;
  overflow-x: hidden;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 0;
  padding: 25px;
  background-size: cover;
  background-color: ${(props) => (props.modeRedux ? "#2b2b2b" : "white")};
  background-position: center center;
  .inside {
    overflow: hidden;
    width: 100vw;
    transition: 0.15s linear;
    min-height: 95vh;
    overflow-x: hidden;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: -1;
    padding: 25px;
    background-size: cover;
    background-color: transparent;
    background-position: center center;
    max-width: 2100px;
    @media (max-width: 850px) {
      font-size: 32px;
      flex-direction: column-reverse;
      align-items: center;
      height: 90vh;
    }
  }
  @media (max-width: 850px) {
    font-size: 32px;
    flex-direction: column-reverse;
    align-items: center;
    height: 90vh;
  }
  .text {
    margin-top: 3vh;
    z-index: 999999999999;
    @media (max-height: 626px) {
      margin-top: 3vh;
    }
    @media (max-width: 850px) {
      // margin-top: -5vh;
    }
    span {
      width: 2px;
      height: 35px;
      background-color: #bfa67a;
      @media (max-width: 850px) {
        height: 15px;
      }
    }
    color: black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .buttons {

      display: flex;

      margin-top: 50px;
      align-items: center;
      justify-content: center;
    }
    h1 {
      transition: 0.15s linear;
      text-transform: uppercase;
      color: ${(props) => (props.modeRedux ? "white" : "#4a4a4a")};
      font-size: 42px;
      font-weight: 700;
      @media (max-width: 1090px) {
        font-size: 32px;
      }
      @media (max-width: 767px) {
        font-size: 20px;
      }
    
      text
    }
    h2 {
      @media (max-height: 620px) {
        display: none;
      }
      text-transform: uppercase;
      font-size: 44px;
      color: #bfa76a;
      font-weight: 700;
      @media (max-width: 1090px) {
        font-size: 34px;
      }
      @media (max-width: 767px) {
        font-size: 24px;
      }
    }
  }
  .background {
    clip-path: circle(65% at 96% 9%);
    z-index: -3;
    background: linear-gradient(
      9deg,
      rgba(191, 166, 122, 1) 31%,
      rgba(210, 210, 210, 1) 100%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 1366px) {
      clip-path: circle(60% at 96% 9%);
    }
    @media (max-width: 1090px) {
      clip-path: circle(56% at 96% 9%);
    }
    @media (max-width: 850px) {
      clip-path: circle(53% at 65% 4.5%);
    }
  }

  .stars {
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    animation: ${flowingAnimation} 1.5s infinite alternate;
    animation-timing-function: ease-in-out;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .image {
    margin-top: 5vh;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    @media (max-width: 850px) {
      margin-top: 0vh;
      height: 35vh;
    }
    @media (min-width: 2400px) {
      justify-content: center;
    }
    img {
      overflow: hidden;
      width: 100%;
      max-width: 1024px;
      animation: ${flowingAnimation} 1.5s infinite alternate;
      animation-timing-function: ease-in-out;
      @media (max-width: 850px) {
        width: 100%;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(HeroPage);
