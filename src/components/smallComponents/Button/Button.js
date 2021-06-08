import React from "react";
import * as styles from "./Button.module.scss";
import { Link as Scroll } from "react-scroll";
import { Link as NavLink } from "gatsby";

const Button = ({ children, secondary, section, router, path, border, customStyle }) => {
  return (
    <>
      {router ? <NavLink
        style={{
          width: "185px",
          height: "50px",

        }}
        to={path}
        exact
        className={
          secondary
            ? `${styles.mainHref} ${styles.secondaryHref}`
            : styles.mainHref
        }
      >
        <button
          className={
            secondary ? `${styles.mainBtn} ${styles.secondary}` : styles.mainBtn
          }
          style={{ border: border, ...customStyle }}
        >
          {children}
        </button>
      </NavLink> : <Scroll
        style={{
          width: "185px",
          height: "50px",
        }}
        to={section}
        className={
          secondary
            ? `${styles.mainHref} ${styles.secondaryHref}`
            : styles.mainHref
        }
        smooth={true}
        duration={1000}
      >
        <button
          className={
            secondary ? `${styles.mainBtn} ${styles.secondary}` : styles.mainBtn
          }
          style={{ border: border, ...customStyle }}
        >
          {children}
        </button>
      </Scroll>}

    </>
  );
};

export default Button;
