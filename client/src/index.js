import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { DataProvider } from "./GlobalState";
import Products from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import CreateProduct from "./pages/CreateProduct";
import About from "./pages/About";
import History from "./pages/History";
import Categories from "./pages/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:'/product',
    element: <Products />,
  },{
    path: "/details/:id",
    element: <DetailProduct />,
  },
  {
    path: '/kart',
    element: <Cart/>,
  },
  {
    path:'/createProduct',
    element: <CreateProduct/>,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/history',
    element: <History />
  },
  {
    path: '/categories',
    element: <Categories />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
