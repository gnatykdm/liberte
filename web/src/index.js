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
import Service3Page from './pages/mainpages/services/head/Service3Page.jsx';
import Service1Page from './pages/mainpages/services/fulfillment/Service1Page.jsx';
import Service5Page from './pages/mainpages/services/service3/Service5Page.jsx';
import Service4Page from './pages/mainpages/services/service4/Service4Page.jsx';
import Service2Page from './pages/mainpages/services/service5/Service2Page.jsx';
import Service1PagePl from './pages/mainpages/services/fulfillment/Service1Page.jsx';
import Service2PagePl from './pages/plpages/services/service2/Service2PagePl.jsx';
import Service3PagePl from './pages/plpages/services/head/Service3PagePl.jsx';
import Service4PagePl from './pages/plpages/services/service4/Service4PagePl.jsx';
import Service5PagePl from './pages/plpages/services/service5/Service5PagePl.jsx';
import Service1PageEn from './pages/enpages/services/service1/Service1PageEn.jsx';
import Service2PageEn from './pages/enpages/services/service2/Service2PageEn.jsx';
import Service3PageEn from './pages/enpages/services/service3/Service3PageEn.jsx';
import Service4PageEn from './pages/enpages/services/service4/Service4PageEn.jsx';
import Service5PageEn from './pages/enpages/services/service5/Service5PageEn.jsx';

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
    path: '/service1',
    element: <Service1Page/>
  },

  {
    path: '/service2',
    element: <Service2Page/>
  },

  {
    path: '/service3',
    element: <Service3Page/>
  },

  {
    path: '/service4',
    element: <Service4Page/>
  },

  {
    path: '/service5',
    element: <Service5Page/>
  },

  {
    path: '/service1/pl',
    element: <Service1PagePl/>
  },

  {
    path: '/service2/pl',
    element: <Service2PagePl/>
  },

  {
    path: '/service3/pl',
    element: <Service3PagePl/>
  },

  {
    path: '/service4/pl',
    element: <Service4PagePl/>
  },

  {
    path: '/service5/pl',
    element: <Service5PagePl/>
  },

  {
    path: '/service1/en',
    element: <Service1PageEn/>
  },

  {
    path: '/service2/en',
    element: <Service2PageEn/>
  },

  {
    path: '/service3/en',
    element: <Service3PageEn/>
  },

  {
    path: '/service4/en',
    element: <Service4PageEn/>
  },

  {
    path: '/service5/en',
    element: <Service5PageEn/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
