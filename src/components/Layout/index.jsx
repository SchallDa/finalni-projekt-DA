import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Header } from "../Header";

export const Layout = () => {
    return (
        <> 
        <Header/>
        {/* <nav>
            <Link to="/">Domů</Link>
            <Link to="/oprojektu">O projektu</Link>
            <Link to="/vyhledatodev">Vyhledat oděv</Link>
        </nav> */}
        <Outlet />
        </>
    )
};
