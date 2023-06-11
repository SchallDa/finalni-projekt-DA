import React from 'react';
import './style.css';

export const ProjectInfo = () => {
  return (
    <>
      <div className="project__container">
        <p className="project__intro project__intro--first">
          Doplním text :) Jedním ze způsobů redukce oblečení je jeho kvalita a
          správná péče o něj.
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
