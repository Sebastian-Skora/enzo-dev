import React, { useEffect, useState } from "react";
import * as styles from "./MobileNavElements.module.scss";
import { Link as NavLink } from "gatsby";
import * as actions from "../../../redux/actions/index";
import styled from "styled-components";
import { connect } from "react-redux";

const navigation_elements = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/uslugi/",
    name: "Usługi",
  },
  {
    path: "/slownik/",
    name: "O Nas",
    subname1: "firma",
    subname2: "portfolio",
    mode: "dropdown",
  },
  {
    path: "/blog/",
    name: "Artykuły",
    subname1: "blog",
    subname2: "słownik",
    mode: "dropdown",
  },
  {
    path: "/kontakt/",
    name: "Kontakt",
  },
];

const MobileNavElements = ({ isOpen, toggleNav }) => {
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
  const [dropdown, toggleDropdown] = useState("");
  useEffect(() => {
    const ham = document.querySelector("#burger-button");
    const fsmenu = document.querySelector(".fsmenu");

    ham.addEventListener("click", function () {
      if (this.classList.contains("is-active")) {
        fsmenu.classList.remove("is-active");
        fsmenu.classList.add("close-menu");
        setTimeout(() => {
          fsmenu.classList.remove("close-menu");
        }, 750);
      } else {
        fsmenu.classList.remove("close-menu");
        fsmenu.classList.add("is-active");
      }

      this.classList.toggle("is-active");
    });
  }, []);
  const checkPathForDropdownWithWindow = (elementsTaken) => {
    if (typeof window !== "undefined") {
      const checkPathForDropdown = (elements) => {
        let result = false;
        elements.filter((el) => {
          if (window.location.href.includes(el)) {
            result = true;
          }
        });
        return result;
      };

      return checkPathForDropdown(elementsTaken);
    }
  };
  const returnWord = (word) => {
    let wordsArray = word.split(" ");
    let spanArray = [];
    wordsArray.forEach((word) => {
      spanArray.push(<span>{word}</span>);
    });

    return spanArray;
  };
  const openDropDown = (name) => {
    if (dropdown === "") {
      toggleDropdown(name);
    } else if (dropdown !== name) {
      toggleDropdown(name);
    } else {
      toggleDropdown("");
    }
  };
  return (
    <div class="fsmenu">
      <div class="fsmenu--container">
        <div class="fsmenu--text-block">
          <div class="fsmenu--text-container">
            <ul class="fsmenu--list">
              {navigation_elements.map((element, i) => (
                <li class="fsmenu--list-element" id={element.mode}>
                  {element.mode === "dropdown" ? (
                    <>
                      <DropDownContainer
                        onClick={() => {
                          openDropDown(element.name);
                        }}
                      >
                        <NavLink activeStyle={{ color: "white" }}>
                          {returnWord(element.name)}
                          <span>
                            <div
                              className={`plus ${
                                dropdown === element.name && "open"
                              }`}
                            ></div>
                          </span>
                        </NavLink>
                        {dropdown === element.name && (
                          <div className="dropdown-mobile">
                            <NavLink
                              id="dropdown-link"
                              to={`/${replacePolishLetters(element.subname1)}/`}
                              activeClassName="active"
                            >
                              <span>-</span>
                              <span>{element.subname1}</span>
                            </NavLink>
                            <NavLink
                              id="dropdown-link"
                              activeClassName="active"
                              to={`/${replacePolishLetters(element.subname2)}/`}
                            >
                              <span>-</span>
                              <span>{element.subname2}</span>
                            </NavLink>
                          </div>
                        )}
                      </DropDownContainer>
                    </>
                  ) : (
                    <NavLink
                      activeStyle={{ color: "#bfa67a" }}
                      to={element.path}
                    >
                      <span>{element.name}</span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const DropDownContainer = styled.div`
  width: 100%;
  height: 100%;
  text-decoration: none;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transition: 0.2s ease;
  position: relative;
  flex-direction: column;
  .dropdown-mobile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 15px;
    .plus {
    }
    #dropdown-link {
      font-size: 22px;
      margin-top: 20px;
      font-weight: 700;
      letter-spacing: 5px;
      text-transform: uppercase;
      line-height: 1;
      height: 1em;
      color: #b5b5b5;
      display: inline-block;
      position: relative;
      z-index: 1002;
      &.active {
        color: #bfa67a;
      }
    }
  }
`;

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.onQuotationModal()),
  };
};

export default connect(null, mapDispatchToProps)(MobileNavElements);
