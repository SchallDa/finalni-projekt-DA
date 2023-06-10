import React from 'react';
import './style.css';

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
          {/* Kabát */}
          <a class="materials__item" href="#">
            <img
              className="materials__image"
              margin-bottom="3px"
              src="./img/wool.jpg"
              alt="Vlna"
            />

            <p className="materials__text">Vlna</p>
          </a>

          {/* Oblek */}
          <a className="materials__item" href="#">
            <img
              className="materials__image"
              src="./img/cotton.jpg"
              alt="Vlna"
            />
            <p className="materials__text">Bavlna</p>
          </a>

          {/* Letní oblečení */}
          <a className="materials__item" href="#">
            <img className="materials__image" src="./img/linen.jpg" alt="Len" />

            <p className="materials__text">Len</p>
          </a>

          {/* Pracovní oblečení */}
          <a className="materials__item" href="#">
            <img
              className="materials__image"
              src="./img/synthetics.jpg"
              alt="Umělá vlákna"
            />
            <p className="materials__text">Umělá vlákna</p>
          </a>
        </div>

        <div className="materials">
          <a className="materials__button materials__button--zpet" href="#">
            Zpět
          </a>
        </div>
      </div>
    </>
  );
};
