import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';
import UserHome from './pages/UserHome/UserHome.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/user-home',
    element: <UserHome />,
  },
  // {
  //   path: '*',
  //   element: <div>404 Not Found</div>,
  // },
]);

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;


