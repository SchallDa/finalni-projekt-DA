import React from 'react';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <div className="main_container">
        <div className="main__image"></div>
        <p className="main__intro">
          Chceš omezit množství oblečení ve své skříni, ale nevíš jak na to?
          Pomůžeme ti.
        </p>

        <div className="buttons">
          <div>
            <a className="button button--big" href="/vyhledat-odev">
              Vyhledat oděv
            </a>
          </div>

          <div>
            <a className="button button--big" href="/materialy">
              Materiály
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
