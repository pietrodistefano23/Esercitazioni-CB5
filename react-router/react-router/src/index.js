import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './routes/app/App';
import Root from './routes/root';
import Quote from './routes/quote';
import ErrorPage from './ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contacts",
    element: <Root />,
  },
  {
    path: "/messages/:quotes",
    element: <Quote />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <RouterProvider router={router} />
  
);


