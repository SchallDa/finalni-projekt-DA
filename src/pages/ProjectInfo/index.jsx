import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ProjectInfo = () => {
  return (
    <>
      <div className="container container__project">
        <img src="./img/linen_HP.jpg" className="project__image" alt="Len" />
        <p className="project__intro">
          Orientovat se v problematice <strong>udržitelné módy</strong> se může
          zdát obtížné. Omezit množství oděvů v šatníku můžeme pomocí kvalitních
          materiálů a správnou péčí o ně.
        </p>

        <p className="project__intro">
          Přírodní materiály v sobě často skrývají klíč k udržitelnému způsobu
          oblékání. Někdy je ale lepší využít oblečení ze syntetiky.
        </p>

        <p className="project__intro project__intro--center">
          Vyber si typ oděvu a my ti pomocí několika otázek pomůžeme najít
          nejvhodnější materiál. Možná potom zjistíš, že jeden vlněný kabát
          stačí od podzimu do jara.
        </p>

        <p className="project__intro">
          Nebo si rovnou přečti o jednotlivých <strong>materiálech.</strong>{' '}
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
