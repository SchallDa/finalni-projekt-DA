import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <div className="container container--main">
        <img src="./img/wool.jpg" className="main__image"></img>
        <p className="main__intro">
          Chceš omezit množství oblečení ve své skříni, ale nevíš jak na to?
          Pomůžeme ti.
        </p>

        <div className="buttons">
          <Link className="button" to="/vyhledat-odev">
            Vyhledat oděv
          </Link>

          <Link className="button" to="/o-projektu">
            O projektu
          </Link>
        </div>
      </div>
    </>
  );
};
