import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from 'react-router-dom';
import { ClothesMenu } from './pages/ClothesMenu';
import { ProjectInfo } from './pages/ProjectInfo';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { Materials } from './pages/Materials';
import { SpecificMaterial } from './pages/SpecificMaterial';
import { App } from './components/App';
import { Header } from './components/Header';
import { ClothesForm } from './components/Forms/ClothesForm';
import { FabricResults } from './pages/FabricResults';

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
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/o-projektu',
        element: <ProjectInfo />,
      },
      {
        path: '/vyhledat-odev/:ClothesFormId',
        element: <ClothesForm />,
      },
      {
        path: '/vyhledat-odev',
        element: <ClothesMenu />,
      },
      {
        path: '/detail-odevu/:uniqueID',
        element: <FabricResults />,
      },

      {
        path: '/materialy',
        element: <Materials />,
      },

      {
        path: '/materialy/:MaterialId',
        element: <SpecificMaterial />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
