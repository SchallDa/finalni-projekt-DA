import React from 'react';
import './style.css';
import { BurgerMenu } from './BurgerMenu';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

// zatím vše tvořeno pro "hlavní navigaci" jako ve Figmě (tj-Domů, O Projektu a Vyhledat oděv), další "vedlejší" pages (Materiály, jednotlivé materiály, výdledný materiál,..) ještě neřešeny

export const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Název projektu</h1>
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
          {/* <Outlet /> */}
        </div>
      </div>
    </>
  );
};
