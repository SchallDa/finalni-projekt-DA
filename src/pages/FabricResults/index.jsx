import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { Clothes } from '../../consts';
import { Link } from 'react-router-dom';

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
    <div className=" container result_container">
      <div className="result__header">
        <img
          src={`/img/${icon}.svg`}
          alt="clothes_icon"
          className="result__icon--clothes"
        />

        <h2 className="result__headline">{header}</h2>
      </div>

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
      <div className="result__text">
        {' '}
        {maintenance.map((mIcons) => (
          <img
            key={mIcons}
            src={`/img/${mIcons}.svg`}
            alt="care_icons"
            className="result__icon--maintanance"
          />
        ))}
        {maintenanceLegend.map((mLegends) => (
          <ul>
            <li key={mLegends} className="result__legend">{`${mLegends}`}</li>
          </ul>
        ))}
      </div>

      <h3 className="result__question">Udržitelnost</h3>
      <p>{eco}</p>

      <Link className="button button-form" to="/vyhledat-odev">
        Zpět
      </Link>
    </div>
  );
};
