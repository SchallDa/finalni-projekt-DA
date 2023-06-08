import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './style.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { VyhledatOdev } from './pages/VyhledatOdev';
import { OProjektu } from './pages/OProjektu';
import { ErrorPage } from './pages/ErrorPage';
//  const src=()=> {
//   return (
//     <App/>
//   )
//  };
 
const router = createBrowserRouter([
  {
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
          {
              path: '/oprojektu',
              element: <OProjektu />,
          },
          {
              path: '/vyhledatodev',
              element: <VyhledatOdev />,
          },

      ],
  },
]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);