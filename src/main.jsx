import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/pages/Layout/Layout';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import Home from './components/pages/Home/Home';
import AddProduct from './components/pages/AddProduct/AddProduct';
import UpdateProduct from './components/pages/UpdateProduct/UpdateProduct';
import BrandDetails from './components/pages/BrandDetails/BrandDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('http://localhost:3000/brand')
      },
      {
        path : '/brandDetails/:id',
        element : <BrandDetails></BrandDetails>,
        loader : ( {params} ) => fetch(`http://localhost:3000/brand/${params.id}`)
      },
      {
        path : '/addProduct',
        element : <AddProduct></AddProduct>
      },
      {
        path : '/updateProduct',
        element : <UpdateProduct></UpdateProduct>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
