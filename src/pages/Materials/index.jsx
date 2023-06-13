import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Materials = () => {
  return (
    <>
      <div className="materials__container">
        <h2>Materiály</h2>
        <p className="materials__intro">
          V oděvním světě najdeme spoustu druhů vláken s různými vlastnostmi.
        </p>

        <p className="materials__intro materials__intro--second">
          Nabízíme ti popis základních materiálů, které můžeš v obchodech najít.
        </p>

        <div className="materials">
          {/* Vlna */}
          <Link class="materials__item" to="vlna">
            <img
              className="materials__image"
              margin-bottom="3px"
              src="./img/wool.jpg"
              alt="Vlna"
            />

            <p className="materials__text">Vlna</p>
          </Link>

          {/* Bavlna */}
          <Link className="materials__item" to="bavlna">
            <img
              className="materials__image"
              src="./img/cotton.jpg"
              alt="Vlna"
            />
            <p className="materials__text">Bavlna</p>
          </Link>

          {/* Len */}
          <Link className="materials__item" to="len">
            <img className="materials__image" src="./img/linen.jpg" alt="Len" />

            <p className="materials__text">Len</p>
          </Link>

          {/* Umělá vlákna */}
          <Link className="materials__item" to="syntetika">
            <img
              className="materials__image"
              src="./img/synthetics.jpg"
              alt="Umělá vlákna"
            />
            <p className="materials__text">Umělá vlákna</p>
          </Link>
        </div>

        <div className="button--flex">
          <Link className="button button--zpet" to="/">
            Zpět
          </Link>
        </div>
      </div>
    </>
  );
};
