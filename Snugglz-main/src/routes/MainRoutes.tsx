import { lazy } from "react";
import BaseLayout from "../layout/BaseLayout";
import Loadable from "../components/SuspenseLoader/Loadable";
import { Navigate } from "react-router-dom";

// ==============================|| MAIN ROUTING ||============================== //

const Home = Loadable(lazy(() => import("../pages/Home")));
const ProductCollection = Loadable(
  lazy(() => import("../pages/ProuctCollection"))
);
const SelectedProduct = Loadable(
  lazy(() => import("../pages/SelectedProduct"))
);
const Cart = Loadable(lazy(() => import("../pages/Cart")));

const MainRoutes = {
  path: "/",
  element: <BaseLayout />,
  children: [
    {
      path: "",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "collections",
      element: <ProductCollection />,
      children: [
        {
          path: "",
        },
        {
          path: ":id",
        },
      ],
    },
    {
      path: "product/:name/:id",
      element: <SelectedProduct />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ],
};

export default MainRoutes;
