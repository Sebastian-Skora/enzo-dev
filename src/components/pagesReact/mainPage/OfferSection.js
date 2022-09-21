import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import responsive from "../../../assets/svgs/responsive.svg";
import responsive_dark from "../../../assets/svgs/responsive_dark.svg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { connect } from "react-redux";

const OfferSection = ({ modeRedux }) => {
  const offer_items = [
    {
      font: "fas fa-terminal",
      title: "STRONA / SKLEP INTERNETOWY",
      description:
        "Do każdego zlecenia na serwis internetowy podchodzimy w sposób indywidualny. Dbamy o każdy szczegół oraz śledzimy na bieżąco nowe technologie, aby każdy stworzony przez nas serwis WWW był na bieżąco z obecnymi trendami. Nasz kod jest od początku pisany tak, aby w łatwy i szybki sposób móc rozwijać projekt na większą skale.",
    },
    {
      font: "fas fa-cogs",
      title: "APLIKACJE MOBILNE IOS / ANDROID ",
      description:
        "Posiadanie strony internetowej już nie jest wystarczające - oczekuje się, że będą to również natywne aplikacje na iOS i Androida.",
    },
  ];
  return (
    <OfferWrapper modeRedux={modeRedux}>
      <div className="columns">
        <LeftColumn modeRedux={modeRedux}>
          <Fade bottom>
            <h2>Oferta</h2>

            <div className="items_container">
              {offer_items.map((item) => (
                <article className="offer_item" key={item.title}>
                  <div
                    style={{
                      width: "155px",
                      height: "70px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className={item.font}
                      style={{
                        color: "#7A7A7A",
                        fontSize: "32px",
                        width: "50px",
                      }}
                    ></i>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <ButtonWrapper>
              <StyledLink to="/uslugi/">Zobacz całą ofertę</StyledLink>
            </ButtonWrapper>
          </Fade>
        </LeftColumn>

        <RightColumn modeRedux={modeRedux}>
          <Flip bottom>
            {modeRedux ? (
              <img src={responsive_dark} alt="responsywność ciemna" />
            ) : (
              <img src={responsive} alt="responsywność" />
            )}
          </Flip>
          ;
        </RightColumn>
      </div>
    </OfferWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  @media (max-width: 850px) {
    width: 260px;

    padding: 13px 40px;
  }
  padding-top: 50px;
  border-radius: 2px;
  box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 12%);
  color: white;
  transition: 0.15s linear;
  background-color: #bfa67a;
  border: 3px solid #bfa67a;
  width: auto;
  width: 420px;
  padding: 13px 100px;
  font-weight: 700;
  /* margin-top: 30px; */
  font-size: 14px;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #000;
    border: 3px solid #000;
  }
`;

const ButtonWrapper = styled.div`
  padding-bottom: 50px;
  padding-top: 40px;
`;

const LeftColumn = styled.div`
  h3 {
    font-size: 15px;
    letter-spacing: 1.3;
    color: ${(props) => (props.modeRedux ? "white" : "#111111")};
  }
  p {
    color: ${(props) => (props.modeRedux ? "#B1B1B1" : "#7A7A7A")};
    font-size: 15px;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .items_container {
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .offer_item {
    display: flex;
    justify-content: flex-start;
    width: 80%;
    width: 420px;
    padding-top: 30px;
    padding-bottom: 30px;
    @media (max-width: 850px) {
      width: 360px;
      margin: 0;
      padding: 30px;
    }
  }
  padding: 100px 0;
  transition: 0.15s linear;
  background-color: ${(props) => (props.modeRedux ? "#2b2b2b" : "#f7f7f7")};
  width: 50%;
  min-height: 80vh;
  @media (max-width: 850px) {
    width: 100%;
    padding: 30px;
  }
  h2 {
    position: relative;
    text-align: center;
    font-weight: 700;
    color: ${(props) => (props.modeRedux ? "white" : "#111111")};
    font-size: 36px;
    text-transform: uppercase;
    letter-spacing: 1.3;
    padding-top: 40px;
    margin-bottom: 70px;
    &::after {
      content: "";
      position: absolute;
      width: 50px;
      left: calc(50% - 25px);
      height: 3px;
      background-color: #cecece;
      bottom: -10px;
    }
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  img {
    width: 50%;
    max-width: 640px;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

const OfferWrapper = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  transition: 0.15s linear;
  background-color: ${(props) =>
    props.modeRedux ? "#2b2b2b" : "#f7f7f7"}; // ALL
  @media (max-width: 850px) {
    flex-direction: column;
  }
  .columns {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    transition: 0.15s linear;
    max-width: 2000px;
  }
`;

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(OfferSection);
