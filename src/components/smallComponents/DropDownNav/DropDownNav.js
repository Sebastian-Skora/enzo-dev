import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const DropDownNav = ({ children, pages }) => {
  const expression = /[ąćęłńóśźż]/gi;

  const replacements = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
    Ą: "A",
    Ć: "C",
    Ę: "E",
    Ł: "L",
    Ń: "N",
    Ó: "O",
    Ś: "S",
    Ź: "Z",
    Ż: "Z",
  };

  const replacePolishLetters = (text) => {
    return text.replace(expression, (letter) => replacements[letter]);
  };

  return (
    <DropDownContainer element={children.props.className}>
      {children}
      <div className="dropdown">
        {pages.map((el) => (
          <StyledLink to={`/${replacePolishLetters(el)}/`}>
            <div className="container">
              <i class="fas fa-angle-right"></i>
              {el[0].toUpperCase() + el.substring(1)}
            </div>
          </StyledLink>
        ))}
      </div>
    </DropDownContainer>
  );
};

const StyledLink = styled(Link)`
  position: relative;
  color: white;
  i {
    color: #bfa67a;
    margin-right: 10px;
  }
`;

const DropDownContainer = styled.div`
  position: relative;
  .dropdown {
    bottom: -220%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% + 180px);
    min-height: 160px;
    position: absolute;
    left: calc(-90px);
    visibility: hidden;
    transition: 0.15s linear;
    display: flex;
    justify-content: center;

    .container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-width: 90px;
    }
    a {
      visibility: hidden;
      opacity: 0;
      text-decoration: none;
      font-weight: 600;
      transition: 0.15s linear;
      padding-left: 0;
      &:hover {
        color: #bfa67a;

        padding-left: 15px;
      }
    }
  }
  .dropdown:hover {
    position: absolute;
    transition: 0.15s linear;
    background-color: #202020;
    width: calc(100% + 180px);
    bottom: -160px;
    left: calc(-90px);
    height: 160px;
    visibility: visible;
    a {
      visibility: visible;
      opacity: 1;
    }
  }

  .${(props) => props.element}:hover + .dropdown {
    position: absolute;
    transition: 0.15s linear;
    background-color: #202020;
    width: calc(100% + 180px);
    bottom: -160px;
    left: calc(-90px);
    height: 160px;
    visibility: visible;
    a {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default DropDownNav;
