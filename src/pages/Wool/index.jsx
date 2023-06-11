import React from 'react';
import './style.css';

export const Wool = () => {
  return (
    <>
      <div className="material__container">
        <div className="material__headline material__image--margin">
          <img
            className="materials__image material__image--margin"
            margin-bottom="3px"
            src="./img/wool.jpg"
            alt="Vlna"
          />
          <h2>Vlna</h2>
        </div>

        <p className="material__intro">
          Vlna je jedním z nejstarších materiálu, ze kterého se oblečení začalo
          vyrábět. Může být z ovce, kašmírské kozy nebo velblouda. V běžných
          obchodech narazíme především na vlnu ovčí.
        </p>

        <p className="material__intro">
          <p className="material__intro__header">Výhody materiálu</p>
          Hlavní výhoda vychází ze samotné struktury vlákna, díky kterému vlna
          skvěle tepelně izoluje. Nejde pouze o samotný povrch. Středem vlákna
          prochází dutinka, která mu dává extra izolaci. Vlna se hodí i do
          sychravého počasí, jako jeden z mála materiálů zahřeje i když je
          mokrá.
        </p>

        <p className="material__intro">
          <p className="material__intro__header">Nevýhody materiálu</p>
          Vlna je materiálem náročným na údržbu. Skrukturou je vlněné vlákno
          podobné lidskému vlasu a obdobná je i péče. Když se o vlasy dobře
          staráme, jsou krásné. Pokud ne, čeká nás matná hříva a roztřepené
          konečky. Stejně jako lidský vlas i vlnu pokrývají šupinky, které se o
          sebe např. během praní třou a zadrhávají, což vede ke žmolkování.
        </p>

        <p className="material__intro">
          <p className="material__intro__header">Údržba</p>
          Vlna je oblíbeným materiálem pro moly. Ti se ale rozhodně nevyskytují
          pouze v domácnostech, kde je špína. Přinést si ho můžeme i z metra
          nebo obchodu. Vyplatí se do skříně přidat lapače a odpuzovače molů.
        </p>

        <p className="material__intro">
          <p className="material__intro__header">Výhody materiálu</p>
          Hlavní výhoda vychází ze samotné struktury vlákna, díky kterému vlna
          skvěle tepelně izoluje. Nejde pouze o samotný povrch. Středem vlákna
          prochází dutinka, která mu dává extra izolaci. Vlna se hodí i do
          sychravého počasí, jako jeden z mála materiálů zahřeje i když je
          mokrá.
        </p>

        <div class="button--flex">
          <a className="button button--zpet" href="#">
            Zpět
          </a>
        </div>
      </div>
    </>
  );
};
