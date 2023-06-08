import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, Outlet} from 'react-router-dom';
import './style.css';
import { App } from '../../App';

export const BurgerMenu = () => {
    return (
        // kódovala jsem na základě knihovny, abychom pak nemusely to menu upravovat přes useState a booleany 
        // https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar
        // zatím BM neumí odkazovat na jednotlivé stránky
        <>
            <Menu>
                <Link to="/">Domů</Link>
                <Link to="/oprojektu">O projektu</Link>
                <Link to="/vyhledatodev">Vyhledat oděv</Link>
            </Menu>
            <Outlet/>
        </>
    )
};