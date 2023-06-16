import React from 'react';
import { Link } from 'react-router-dom';

export const Links = () => {
  return (
    <>
      <nav>
        <Link to="/">Domů</Link>
        <Link to="/o-projektu">O projektu</Link>
        <Link to="/vyhledat-odev">Vyhledat oděv</Link>
      </nav>
    </>
  );
};
