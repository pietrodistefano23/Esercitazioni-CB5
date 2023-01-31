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
import ErrorPage from './errorpage/ErrorPage';
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
    path: "/contacts/:quotes",
    element: <Quote />,
  },
  {
    path: "/messages",
    element: <h3>Coming soon...</h3>,
  },
  {
    path: "/post",
    element: <h3>Coming soon...</h3>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <RouterProvider router={router} />
  
);


