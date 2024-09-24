import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HomePage from '../src/Pages/HomePage/HomePage'
import Layout from '../src/Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioPage from './Pages/Portfolio/PortfolioPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      // { path: "mylibrary", element: <MyLibraryPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);


