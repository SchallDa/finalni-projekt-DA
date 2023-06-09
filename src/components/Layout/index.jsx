import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Header } from "../Header";

export const Layout = () => {
    return (
        <> 
        <nav>
          <Link to="/">Domů</Link>
          <Link to="/o-projektu">O projektu</Link>
          <Link to="/vyhledat-odev">Vyhledat oděv</Link>
        </nav>
        </>
    )
};
