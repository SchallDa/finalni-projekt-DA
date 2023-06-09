import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { ClothesMenu } from './pages/ClothesMenu';
import { ProjectInfo } from './pages/ProjectInfo';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
//  const src=()=> {
//   return (
//     <App/>
//   )
//  };
const App =()=> {
  return (
<>

</>
  )
};
const router = createBrowserRouter([
  {
      path: '/',
      element: <HomePage/>,
      errorElement: <ErrorPage />,
      children: [
      //   {
      //     path: '/domu',
      //     element: <Home />,
      // },
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