import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import OrderSummary from './components/OrderSummary';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import New from './components/New';
import ErrorPage from './components/ErrorPage';
import RestaurantMenu from './components/RestaurantMenu';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },

      {
        path: 'products',
        element: <Products />,
        children: [
          {
            index: true,
            element: <Featured />,
          },
          {
            path: 'featured',
            element: <Featured />,
          },
          {
            path: 'new',
            element: <New />,
          },
        ],
      },
      {
        path: 'order-summary',
        element: <OrderSummary />,
      },
      {
        path: 'restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
