import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import './style.css';

export const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/">Domů</Link>
                <Link to="/oprojektu">O projektu</Link>
                <Link to="/vyhledatodev">Vyhledat oděv</Link>
            </nav>
        </>
    )
}