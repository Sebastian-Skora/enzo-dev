import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const SpecialButton = () => {
  return (
    <Button className="special-button" to="/portfolio/">
      Zobacz naszych zadowolonych klientów!<i class="fas fa-arrow-right"></i>
      <span></span>
    </Button>
  );
};

const Button = styled(Link)`
  padding: 0px 40px;
  min-width: 240px;
  height: 80px;
  text-decoration: none;
  border-radius: 2px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  background-color: #202020;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: white;
  z-index: 2;
  text-align: center;
  transition: 0.4s ease;
  box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 12%);
  i {
    color: white;
    position: absolute;
    right: 15px;
    opacity: 0;
    transition: 0.4s ease;
  }
  &:hover i {
    opacity: 1;
  }
  &:hover {
    padding-right: 55px;
    color: white;
  }
  &:hover span {
    transform: translateX(0);
  }
  span {
    z-index: -1;
    transition: transform 0.4s ease;
    position: absolute;
    background-color: #bfa67a;
    transform: translateX(-100%);
    top: 0;
    width: 120%;
    height: 100%;
  }
`;

export default SpecialButton;
