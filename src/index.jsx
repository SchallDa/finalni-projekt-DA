import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import { ClothesMenu } from './pages/ClothesMenu';
import { ProjectInfo } from './pages/ProjectInfo';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { Layout } from './components/Layout';
import { Header } from './components/Header';

//  export const App = () => {
//   return (
//     <>
//       <Link to="/">Domů</Link>
//       <Link to="/oprojektu">O projektu</Link>
//       <Link to="/vyhledatodev">Vyhledat oděv</Link>
//     </>
//   )
// };
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
      path:'/',
      element: <HomePage />,
      },
      {
        path: '/oprojektu',
        element: <ProjectInfo />,
      },
      {
        path: '/vyhledatodev',
        element: <ClothesMenu />,
      },

    ],
  },

]);


createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);