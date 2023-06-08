import React from 'react';
import { Header } from '../Header';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { VyhledatOdev } from '../../pages/VyhledatOdev';
import { OProjektu } from '../../pages/OProjektu';
import { ErrorPage } from '../../pages/ErrorPage';

export const App = () => {
    return (
        <>
            <div className="container">
                <Header />
                {/* <RouterProvider router={router} /> */}
            </div>
        </>
    );
};

