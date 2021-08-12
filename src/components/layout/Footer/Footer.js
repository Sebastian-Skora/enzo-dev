import React from "react";
import * as styles from "./Footer.module.scss";
import { Link } from 'gatsby'
import styled from 'styled-components';
const Footer = ({ position }) => {
  return (
    <footer className={styles.footer} style={{ position: position }}>
      <p>&copy; {new Date().getFullYear()} Sebastian Skóra & Kornel Naróg | Freelance Web & App
        Developers</p>
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
          <StyledLink to="/">Strona główna |</StyledLink>
          <StyledLink to="/uslugi/">Usługi |</StyledLink>
          <StyledLink to="/blog/">Blog |</StyledLink>
          <StyledLink to="/kontakt/">Kontakt</StyledLink>
        </LinksContainer>

        <SocialMediaContainer>
          <a href="https://www.instagram.com/enzodevelopment/"><i class="fab fa-instagram-square"></i></a>
          <a href="https://www.facebook.com/enzowebdev/"><i class="fab fa-facebook-square"></i></a>
        </SocialMediaContainer>
      </MediaWrapper>
    </footer>
  );
};

const MediaWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
width:100%;
padding-top: 30px;
overflow: hidden;
align-items: center;

`

const SocialMediaContainer = styled.div`
font-size: 36px;
display: flex;
justify-content: center;
width: 50%;
@media(min-width: 713px) {
  justify-content: flex-end;
}
i {
  margin-right: 10px;
}

@media(min-width: 428px) {
  padding-right: 30px;
}

@media(min-width: 1024px) {
  font-size: 48px;
  padding-right: 120px;
}

`

const LinksContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 50%;
padding-left: 15px;
justify-content: flex-start;
@media(min-width: 713px) {
  flex-direction: row;
}
@media(min-width: 428px) {
  padding-left: 30px;
}
@media(min-width: 1024px) {
  
  padding-left: 120px;
}
`

const StyledLink = styled(Link)`
@media(min-width: 768px) {
  font-size: 14px;
}
&:hover {
  color: #bfa67a;
  transition: 0.3s linear;
}
margin: 3px;
text-decoration: none;
`

export default Footer;
