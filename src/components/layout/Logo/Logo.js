import React from "react";
import * as styles from "./Logo.module.scss";
import { animateScroll as scroll } from "react-scroll";
import { Link } from 'gatsby';
import styled from 'styled-components'
// import { useHistory } from "react-router-dom";


const Logo = () => {
  // const history = useHistory();
  const homeHandle = () => {

    // history.push("/");

  }

  return (
    <StyledLink to="/"><small
      className={styles.logo}
      onClick={
        homeHandle
      }
    >
      <span style={{ color: "#fff", cursor: "pointer" }}>
        #EN<span style={{ color: "#bfa67a" }}>ZO</span>
      </span>
    </small>
    </StyledLink>
  );
};


const StyledLink = styled(Link)`
display:flex;
align-items: center;
`

export default Logo;
