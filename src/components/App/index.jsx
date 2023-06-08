import React from 'react';
import { Header } from '../Header';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { ClothesMenu} from '../../pages/ClothesMenu';
import { ProjectInfo } from '../../pages/ProjectInfo';
import { ErrorPage } from '../../pages/ErrorPage';

export const App = () => {
    return (
        <>
            <div className="container">
                <Header />
                
            </div>
            <div className='wool-image'></div>
            {/* proc se nechce vložit obrázek?  */}
        
        </>
    );
};

