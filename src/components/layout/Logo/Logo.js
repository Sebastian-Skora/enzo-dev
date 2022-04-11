import React from "react";
import * as styles from "./Logo.module.scss";
import { Link } from "gatsby";
import styled from "styled-components";

const Logo = () => {
  return (
    <div>
      <StyledLink to="/">
        <small className={styles.logo}>
          <span
            style={{ color: "#fff", cursor: "pointer" }}
            className="logo-span"
          >
            <i class="fas fa-laptop-code"></i>
            ENZO
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

export default Logo;
