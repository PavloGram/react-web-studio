import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HomePage from '../src/Pages/HomePage/HomePage'
import ErrorePage from '../src/Pages/ErrorePage/ErrorePage'
import Layout from '../src/Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioPage from './Pages/Portfolio/PortfolioPage';
import ContactsPage from './Pages/ContactsPage/ContactsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorePage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "contacts", element: <ContactsPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);


