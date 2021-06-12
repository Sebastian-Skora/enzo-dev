import React from "react";
import * as styles from "./Footer.module.scss";
import { Link } from 'gatsby'
import styled from 'styled-components';
const Footer = ({ position }) => {
  return (
    <footer className={styles.footer} style={{ position: position }}>
      &copy; {new Date().getFullYear()} Sebastian Skóra & Kornel Naróg | Freelance Web & App
      Developer
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixelmeetup"
          title="Pixelmeetup"
        >
          Pixelmeetup
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <MediaWrapper>

        <LinksContainer>
          <StyledLink>Strona główna |</StyledLink>
          <StyledLink>Usługi |</StyledLink>
          <StyledLink>Aktualności |</StyledLink>
          <StyledLink>Kontakt</StyledLink>
        </LinksContainer>

        <SocialMediaContainer>
          <i class="fab fa-instagram-square"></i>
          <i class="fab fa-facebook-square"></i>
        </SocialMediaContainer>
      </MediaWrapper>
    </footer>
  );
};

const MediaWrapper = styled.section`
display:flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
width:100vw;
padding-top: 30px;
overflow: hidden;
`

const SocialMediaContainer = styled.div`

`

const LinksContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const StyledLink = styled(Link)`
margin: 3px;
`

export default Footer;
