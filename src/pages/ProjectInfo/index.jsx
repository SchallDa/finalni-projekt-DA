import React from 'react';
import './style.css';

export const ProjectInfo = () => {
  return (
    <>
      <div className="project__container">
        <p className="project__intro project__intro--first">
          Jedním ze způsobů redukce oblečení je jeho kvalita a správná péče o
          něj.
        </p>

        <p className="project__intro">
          Když zvolíme vhodný materiál, zjistíme, že jeden vlněný kabát stačí od
          podzimu do jara
        </p>

        <p className="project__intro">
          Zvol si typ oděvu, který tě zajímá, specifikuj své požadavky a my ti
          řekneme, který materiál se pro tebe nejvíc hodí. Nebo si rovnou vyber
          typ materiálu, o kterém se chceš dozvědět víc.
        </p>

        <div class="buttons">
          <div>
            <a className="project__button project__button--vyhledat" href="#">
              Vyhledat oděv
            </a>
          </div>

          <div>
            <a className="project__button project__button--materialy" href="#">
              Materiály
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
