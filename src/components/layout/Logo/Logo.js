import React from "react";
import * as styles from "./Logo.module.scss";
import { Link } from "gatsby";
import styled from "styled-components";
import LogoIMG from "../../assets/logo/logo.png";

const Logo = () => {
  return (
    <div>
      <StyledLink to="/">
        <small className={styles.logo}>
          <span
            style={{ color: "#fff", cursor: "pointer" }}
            className="logo-span"
          >
            <StyledImg src={LogoIMG} />
          </span>
        </small>
      </StyledLink>
    </div>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  outline: none;
  text-decoration: none;
  i {
    font-size: 30px;
    margin-right: 10px;
    color: #bfa67a;
    @media (max-width: 950px) {
      font-size: 18px;
    }
  }
`;

const StyledImg = styled.img`
  width: 140px;

  @media (max-width: 1024px) {
    width: 120px;
  }

  @media (max-width: 640px) {
    width: 86px;
  }
`;

export default Logo;
