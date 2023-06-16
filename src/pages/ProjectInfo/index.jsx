import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ProjectInfo = () => {
  return (
    <>
      <div className="container project__container">
        <img src="./img/linen_HP.jpg" className="project__image"></img>
        <p className="project__intro project__intro--first">
          Orientovat se v problematice udržitelné módy se může zdát obtížné.
          Omezit množství oděvů v šatníku můžeme pomocí kvalitních materiálů a
          správnou péčí o ně. Přírodní materiály v sobě často skrývají klíč k
          udržitelnému způsobu oblékání. Někdy je ale lepší využít oblečení ze
          syntetiky.
        </p>

        <p className="project__intro project__intro--first">
          V následujícím kroku si vyber typ oděvu a my ti pomocí několika otázek
          pomůžeme najít nejvhodnější materiál. Možná potom zjistíš, že jeden
          vlněný kabát stačí od podzimu do jara.
        </p>

        <p className="project__intro project__intro--first">
          Nebo si rovnou přečti o jednotlivých materiálech.{' '}
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
