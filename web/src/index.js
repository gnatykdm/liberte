import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/mainpages/main/MainPage';
import MainAboutUs from './pages/mainpages/about/MainAboutUS';
import MainContactPage from './pages/mainpages/contact/MainContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>
  },

  {
    path: '/about',
    element: <MainAboutUs/>
  },

  {
    path: '/contact',
    element: <MainContactPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
