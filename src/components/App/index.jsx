import React from 'react';
import { Header } from '../Header';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { ClothesMenu} from '../../pages/ClothesMenu';
import { ProjectInfo } from '../../pages/ProjectInfo';
import { ErrorPage } from '../../pages/ErrorPage';
import wool from "../../img/wool.jpg"
import './style.css';

export const App = () => {
    return (
        <>
            <div className="container">
                <Header />
                
            </div>
            <img className="woolen-fiber" src={wool} alt="woolen_fiber" />
            
        
        </>
    );
};

