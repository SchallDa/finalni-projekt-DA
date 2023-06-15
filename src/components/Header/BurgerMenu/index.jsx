import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./style.css";
import { Links } from "../../Links";

export const BurgerMenu = () => {
  return (
    <>
      <Menu right>
        <Links />
      </Menu>
    </>
  );
};
