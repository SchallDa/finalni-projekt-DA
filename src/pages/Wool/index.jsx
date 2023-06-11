import React from 'react';
import './style.css';

export const Wool = () => {
  return (
    <>
      <div className="material__container">
        <div>
          <img src="./img/wool.jpg)" alt="" />
          <h2>Vlna</h2>
        </div>

        <p className="intro">
          Jedním ze způsobů redukce oblečení je jeho kvalita a správná péče o
          něj.
        </p>

        <div className="buttons">
          <div>
            <a className="project__button project__button--vyhledat" href="#">
              Vyhledat oděv
            </a>
          </div>

          <div>
            <a
              className="project__button project__button--materialy"
              href="/materialy"
            >
              Materiály
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
