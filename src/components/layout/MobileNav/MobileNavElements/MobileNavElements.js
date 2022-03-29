import React, { useEffect } from "react";
import * as styles from "./MobileNavElements.module.scss";
import { Link as NavLink } from "gatsby";
import * as actions from "../../../redux/actions/index";
import { connect } from "react-redux";
import { gsap } from "gsap";

const navigation_elements = [
  {
    path: "/",
    name: "Strona główna",
  },
  {
    path: "/uslugi/",
    name: "Usługi",
  },
  {
    path: "/slownik/",
    name: "Słownik IT",
  },
  {
    path: "/blog/",
    name: "Blog",
  },
  {
    path: "/kontakt/",
    name: "Kontakt",
  },
];

const MobileNavElements = ({ isOpen, toggleNav }) => {
  useEffect(() => {
    const ham = document.querySelector("#burger-button");
    const menu = document.querySelector("#menu");
    const links = menu.querySelectorAll("#menu div li");

    var tl = gsap.timeline({ paused: true });

    tl.to(menu, {
      duration: 1,
      opacity: 1,
      scaleX: "1", // change this to 100vh for full-height menu
      ease: "expo.inOut",
    });
    tl.from(
      links,
      {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "expo.inOut",
      },
      "-=0.5"
    );

    tl.reverse();

    ham.addEventListener("click", () => {
      tl.reversed(!tl.reversed());
    });
  }, []);
  return (
    <ul className={styles.mobileNavElements} id="menu">
      <div className={styles.elements_container}>
        {navigation_elements.map((element) => (
          <li className={styles.navItem}>
            <NavLink
              activeClassName={styles.itemLinkActive}
              className={styles.itemLink}
              to={element.path}
              onClick={toggleNav}
            >
              {element.name}
            </NavLink>
          </li>
        ))}
      </div>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.onQuotationModal()),
  };
};

export default connect(null, mapDispatchToProps)(MobileNavElements);
