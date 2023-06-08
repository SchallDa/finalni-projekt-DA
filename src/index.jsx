import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './style.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { ClothesMenu } from './pages/ClothesMenu';
import { ProjectInfo } from './pages/ProjectInfo';
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