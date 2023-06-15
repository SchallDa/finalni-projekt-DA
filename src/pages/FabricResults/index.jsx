import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { Clothes } from "../../consts";
import { Link } from "react-router-dom";

export const FabricResults = () => {
  const { uniqueID } = useParams();
  const {
    header,
    icon,
    fiberLink,
    link,
    pros,
    cons,
    maintenance,
    maintenanceLegend,
    eco,
  } = Clothes[uniqueID];

  return (
    <div className="form_container">
      <div className="form__header">
        <img
          src={`/img/${icon}.svg`}
          alt="clothes_icon"
          className="form__image form__image--pink"
        />

        <h2 className="form__headline">{header}</h2>
      </div>

      {/* Potřeba napojit linky na stránku s konkrétním materiálem */}
      <Link to={`${link}`}>
        <img
          src={`/img/${fiberLink}.jpg`}
          className="result__image"
          alt="fiber_link_to_materials"
        />
      </Link>

      <h3 className="result__question">Proč zrovna tento materiál</h3>
      <p className="result__text">{pros}</p>
      <h3 className="result__question">Nevýhody</h3>
      <p className="result__text">{cons}</p>
      <h3 className="result__question">Údržba</h3>
      {/* spodní řádek připraven pro pole ikon */}
      <div className="result__text">
        {" "}
        {maintenance.map((mIcons) => (
          <img
            key={mIcons}
            src={`/img/${mIcons}.svg`}
            alt="care_icons"
            className="form__image"
          />
        ))}
        {maintenanceLegend.map((mLegends) => (
          <div 
          key={mLegends}
          className="result__legend">{`${mLegends}`}</div>
        ))}
      </div>
      <h3 className="result__question">Udržitelnost</h3>
      <p>{eco}</p>
      {/* Tyno, ty divy, p a celkově styly, jsou tam jen provizorne, abych ty propsy do něčeho obalila. Měň to a upravuje dle libosti */}

      <Link className="button button-form" to="/vyhledat-odev">
        Zpět
      </Link>
    </div>
  );
};
