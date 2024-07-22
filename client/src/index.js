import React from 'react';
import ReactDOM from 'react-dom/client';
import {Toaster} from 'react-hot-toast';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './view/Home/Home.js';
import Login from './view/Login/Login.js';
import Signup from './view/Signup/Signup.js';
import Addtransaction from './view/Add/Addtransaction.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/add",
    element: <Addtransaction />
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>
  }
])
root.render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
