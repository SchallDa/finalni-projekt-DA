import React from 'react';
import './style.css';
import { Header } from '../../components/Header';

export const HomePage = () => {
  return (
    <>
    <Header/>
      <div className="container">
        <div className="main__image"></div>
        <p className="main__intro">
          Chceš omezit množství oblečení ve své skříni, ale nevíš jak na to?
          Pomůžeme ti.
        </p>
      </div>
    </>
  );
};
