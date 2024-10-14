import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/mainpages/main/MainPage';
import MainAboutUs from './pages/mainpages/about/MainAboutUS';
import MainContactPage from './pages/mainpages/contact/MainContactPage';
import MainPlPage from './pages/plpages/mainpl/MainPlPage';
import AboutPlPage from './pages/plpages/aboutpl/AboutPlPage';
import ContactPlPage from './pages/plpages/contactpl/ContactPlPage';
import MainEn from './pages/enpages/mainen/MainEn';
import ContactEnPage from './pages/enpages/contacten/ContactEnPage';
import MainEnAbout from './pages/enpages/abouten/MainEnAbout';
import HeadService from './pages/mainpages/services/head/HeadService';
import FulFillment from './pages/mainpages/services/fulfillment/FulFillment';
import FulFillmentPageEn from './pages/enpages/services/fulfillment/FulFillmentPageEn';
import HeadServicePageEn from './pages/enpages/services/head/HeadServicePageEn';
import FulFillmentPagePl from './pages/plpages/services/fulfillment/FulFillmentPagePl';
import HeadServicePagePl from './pages/plpages/services/head/HeadServicePagePl';

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
  },

  {
    path: '/en',
    element: <MainEn/>
  },

  {
    path: '/about/en',
    element: <MainEnAbout/>
  },

  {
    path: '/contact/en',
    element: <ContactEnPage/>
  },

  {
    path: '/pl',
    element: <MainPlPage/>
  },

  {
    path: '/about/pl',
    element: <AboutPlPage/>
  },

  {
    path: '/contact/pl',
    element: <ContactPlPage/>
  },

  {
    path: '/service',
    element: <HeadService/>
  },

  {
    path: '/fulfillment',
    element: <FulFillment/>
  },

  {
    path: '/fulfillment/en',
    element: <FulFillmentPageEn/>
  },

  {
    path: '/service/en',
    element: <HeadServicePageEn/>
  },

  {
    path: '/fulfillment/pl',
    element: <FulFillmentPagePl/>
  },

  {
    path: '/service/pl',
    element: <HeadServicePagePl/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
