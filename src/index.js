import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home'
import About from './Pages/About'
import JournalAI from './Pages/JournalAI'
import Disclaimer from './Pages/Disclaimer';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home /></div>,
  },
  {
    path: "/about",
    element: <div><About /></div>,
  },
  {
    path: "/journalai",
    element: <div><JournalAI /></div>,
  },
  {
    path: "/resource",
    element: <div><Home /></div>,
  },
  {
    path: "/footer/disclaimer",
    element: <div><Disclaimer /></div>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);