import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <div className="container container--main">
        <div className="main__image"></div>
        <p className="main__intro">
          Chceš omezit množství oblečení ve své skříni, ale nevíš jak na to?
          Pomůžeme ti.
        </p>

        <div className="buttons">
          <Link className="button button--big" to="/vyhledat-odev">
            Vyhledat oděv
          </Link>

          <Link className="button button--big" to="/materialy">
            Materiály
          </Link>
        </div>
      </div>
    </>
  );
};
