import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { configs, getClothesId } from '../../../consts';
import { trues } from '../../../helpers';
import { Link } from 'react-router-dom';

export const ClothesForm = () => {
  const { register, handleSubmit } = useForm();
  const { ClothesFormId } = useParams();
  const navigate = useNavigate();

  const onSubmit = (formDataResults) => {
    const trueCounts = trues(formDataResults);
    const uniqueID = getClothesId(ClothesFormId, trueCounts);
    navigate(`/detail-odevu/${uniqueID}`);
  };

  const { questions, icon } = configs[ClothesFormId];
  return (
    <div className="container">
      <div className="form__header">
        <img
          src={`/img/${icon}.svg`}
          className="form__icon"
          alt="clothes_icon"
        />

        <h2 className="form__headline">Co od oblečení očekáváš?</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {questions.map(({ id, label }) => {
          return (
            <div key={id} className="form__item">
              <h3 className="form__question">{label}</h3>

              <span className="form__input">
                <input
                  type="radio"
                  value={true}
                  id={`yes${id}`}
                  {...register(id)}
                  color="red"
                />
                <label htmlFor={`yes${id}`}>Ano</label>
              </span>

              <span className="form__input">
                <input
                  type="radio"
                  value={false}
                  id={`no${id}`}
                  {...register(id)}
                />
                <label htmlFor={`no${id}`}>Ne</label>
              </span>
            </div>
          );
        })}

        <button className="button button__form">Vyhodnotit</button>

        <Link className="button" to="/vyhledat-odev">
          Zpět
        </Link>
      </form>
    </div>
  );
};
