import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Pages/Welcome'
import About from './Pages/About'
import JournalAI from './Pages/JournalAI'
import Disclaimer from './Pages/Disclaimer';
import CountDown from './Components/CountDown/CountDown';
import Resource from './Pages/Resource';
import CreateContent from './Pages/CreateContent';
import Profile from './Pages/Profile';
import './index.css'
import Garage from './Garage'
import SignInForm from './Pages/UserAuth/SignIn';
import SignUpForm from './Pages/UserAuth/SignUp';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <div><Welcome /></div>,
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
    path: "/createcontent",
    element: <div><CreateContent /></div>
  },
  {
    path : "/profile",
    element : <div><Profile /></div>
  },
  {
    path : "/garage",
    element : <div><Garage /></div>
  },
  {
    path : "/signin",
    element : <div><SignInForm /></div>
  },
  {
    path : "/signup",
    element : <div><SignUpForm /></div>
  },
  {
    path : "/",
    element : <div><Resource /></div>
  },
]);

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);