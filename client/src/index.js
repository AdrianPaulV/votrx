import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import HomePage from './pages/HomePage';
import UserHome from './pages/UserHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:userId',
    element: <UserHome />,
  },
  // {
  //   path: '*',
  //   element: <div>404 Not Found</div>,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
