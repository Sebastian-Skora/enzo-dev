import React, { useEffect } from "react";
import * as styles from "./MobileNavElements.module.scss";
import { Link as NavLink } from "gatsby";
import * as actions from "../../../redux/actions/index";
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
    name: "Słownik",
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
    const fsmenu = document.querySelector(".fsmenu");

    ham.addEventListener("click", function () {
      if (this.classList.contains("is-active")) {
        fsmenu.classList.remove("is-active");
        fsmenu.classList.add("close-menu");
      } else {
        fsmenu.classList.remove("close-menu");
        fsmenu.classList.add("is-active");
      }
      this.classList.toggle("is-active");
    });
  }, []);
  return (
    // <ul className={styles.mobileNavElements} id="menu">
    //   <div className={styles.elements_container}>
    //     {navigation_elements.map((element) => (
    //       <li className={styles.navItem}>
    //         <NavLink
    //           activeclassName={styles.itemLinkActive}
    //           className={styles.itemLink}
    //           to={element.path}
    //           onClick={toggleNav}
    //         >
    //           {element.name}
    //         </NavLink>
    //       </li>
    //     ))}
    //   </div>
    // </ul>
    <div class="fsmenu">
      <div class="fsmenu--container">
        <div class="fsmenu--text-block">
          <div class="fsmenu--text-container">
            <ul class="fsmenu--list">
              {navigation_elements.map((element) => (
                <li class="fsmenu--list-element">
                  <NavLink activeStyle={{ color: "#bfa67a" }} to={element.path}>
                    <span>{element.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.onQuotationModal()),
  };
};

export default connect(null, mapDispatchToProps)(MobileNavElements);
