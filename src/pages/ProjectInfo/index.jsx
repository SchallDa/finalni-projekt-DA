import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ProjectInfo = () => {
  return (
    <>
      <div className="project__container">
        <p className="project__intro project__intro--first">
          Doplním text Jedním ze způsobů redukce oblečení je jeho kvalita a
          správná péče o něj.
        </p>

        <div className="buttons">
          <div>
            <Link className="button button--big" to="/vyhledat-odev">
              Vyhledat oděv
            </Link>
          </div>

          <div>
            <Link className="button button--big" to="/materialy">
              Materiály
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
