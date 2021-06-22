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
          <StyledLink to="/">Strona główna |</StyledLink>
          <StyledLink to="/uslugi">Usługi |</StyledLink>
          <StyledLink to="/aktualnosci">Aktualności |</StyledLink>
          <StyledLink to="/kontakt">Kontakt</StyledLink>
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
width:100%;
padding-top: 30px;
overflow: hidden;
align-items: center;

`

const SocialMediaContainer = styled.div`
font-size: 36px;
i {
  margin-right: 10px;
}
@media(min-width: 1024px) {
  font-size: 48px;
}
padding-top: 15px;
@media(min-width: 768px) {
  padding-top: 0px;
}
`

const LinksContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
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
