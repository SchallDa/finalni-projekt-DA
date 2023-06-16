import React from 'react';
import './style.css';
import { BurgerMenu } from './BurgerMenu';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Fibers & Fashion</h1>
        <div className="burgerMenu-container">
          <div className="App" id="outer-container">
            <BurgerMenu
              pageWrapId={'page-wrap'}
              outerContainerId={'outer-container'}
            />
            <div id="page-wrap"></div>
          </div>
        </div>
        <div className="navbar-container">
          <Navbar />
        </div>
      </div>
    </>
  );
};
