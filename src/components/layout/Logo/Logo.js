import React from "react";
import * as styles from "./Logo.module.scss";
import { Link } from "gatsby";
import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLink to="/">
      <small className={styles.logo}>
        <span style={{ color: "#fff", cursor: "pointer" }}>
          #EN<span style={{ color: "#bfa67a" }}>ZO</span>
        </span>
      </small>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  outline: none;
  text-decoration: none;
`;

export default Logo;
