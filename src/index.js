import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home'
import About from './Pages/About'
import JournalAI from './Pages/JournalAI'
import Disclaimer from './Pages/Disclaimer';
import CountDown from './Components/CountDown/CountDown';
import Resource from './Pages/Resource';
import CreateContent from './Pages/CreateContent';
import UserAuth from './Pages/UserAuth'
import Profile from './Pages/Profile';
import DELETE2 from './Pages/DELETE2';
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
    path:"/counter",
    element: <div><CountDown /></div>,
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
    element: <div><Resource /></div>,
  },
  {
    path: "/footer/disclaimer",
    element: <div><Disclaimer /></div>
  },
  {
    path: "/resource/createcontent",
    element: <div><CreateContent /></div>
  },
  {
    path : "/userauth",
    element : <div><UserAuth /></div>
  },
  {
    path : "/profile",
    element : <div><Profile /></div>
  },
  {
    path : "/DELETE2",
    element : <div><DELETE2 /></div>
  }
]);

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);