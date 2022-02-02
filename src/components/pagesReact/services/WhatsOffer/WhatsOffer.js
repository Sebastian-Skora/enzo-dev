import React from "react";
import OfferElements from "./OfferElements/OfferElements";
import * as styles from "./WhatsOffer.module.scss";
import styled from "styled-components";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
const WhatsOffer = ({ modeRedux }) => {
  return (
    <section
      className={`${styles.whatsOffer_section} ${
        modeRedux && styles.dark_mode
      }`}
    >
      <Fade>
        <div
          className={`${styles.offerTitle} ${modeRedux && styles.dark_mode}`}
        >
          <h1>NASZE USŁUGI INFORMATYCZNE</h1>
          <p
            className={`${styles.description} ${modeRedux && styles.dark_mode}`}
          >
            Możliwości związane z kodem są nieograniczone i można realizować
            wszelkiego rodzaju projekty, ale oto niektóre z naszych podstawowych
            usług
          </p>
        </div>
      </Fade>

      <OfferElements modeRedux={modeRedux} />
      <ButtonWrapper>
        <StyledLink to="/kontakt/">DARMOWA WYCENA</StyledLink>
      </ButtonWrapper>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

const StyledLink = styled(Link)`
  text-decoration: none;
  @media (max-width: 850px) {
    width: 260px;

    padding: 13px 40px;
  }
  padding-top: 50px;
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

export default connect(mapStateToProps, null)(WhatsOffer);
