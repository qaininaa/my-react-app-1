import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import Error404Page from "./pages/error404.jsx";
import ProductsPage from "./pages/products.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404Page />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <Error404Page />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <Error404Page />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    errorElement: <Error404Page />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/");
      }
      return null;
    },
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
