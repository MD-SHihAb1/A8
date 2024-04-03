import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Part2 from "./Part2/Part2.jsx";
import  { Toaster } from 'react-hot-toast';
import Details from "./Part2/Book/Details.jsx";
import Layout from "./Layout/Layout.jsx";
import Books from "./Part2/Book/Books.jsx";
import ReadBooks from "./Part2/Book/ReadBooks.jsx";
import Wishlist from "./Part2/Book/Wishlist.jsx";
import Login from "./Part2/Book/Login.jsx";
import Singup from "./Part2/Book/Tjs/Singup.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/about",
        element: <Part2></Part2>,
      },
      {
        path: "/me",
        element: <h1>Heelo its me</h1>,
      },
      {
        path: "/book/:bookId",
        element: <Details></Details>,
        loader: ({params}) => fetch(`/public/Book.json${params.bookId}`),
        
      },
      {
        path:"book/read",
        element:<Books></Books>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: ()=> fetch('/public/Book.json'),
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
          },
        ]
          
      }
    ],
  
  },
  // {

  //   path: 'readbookss',
  //   element:<Rbooks></Rbooks>,
  //   loader: ()=> fetch('/public/Book.json'),
  // },


  {
    path:'login',
    element:<Login></Login>
  },
  {
    path:'Singup',
    element:<Singup></Singup>
  },
  {
    path: 'shihab',
   
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>
);