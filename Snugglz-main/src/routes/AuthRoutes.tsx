import { lazy } from "react";
import { Navigate } from "react-router-dom";
import AuthGuard from "../layout/AuthGuard";
import GuestGuard from "../layout/GuestGuard";
import Loadable from "../components/SuspenseLoader/Loadable";

// login routing
const AuthLogin = Loadable(
  lazy(() => import("../pages/AuthHandler/AuthLogin"))
);
const AuthRegister = Loadable(
  lazy(() => import("../pages/AuthHandler/AuthRegister"))
);

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthRoutes = {
  path: "auth",
  element: (
    <GuestGuard>
      <AuthGuard />
    </GuestGuard>
  ),
  children: [
    {
      path: "",
      element: <Navigate to="/auth/login" replace />,
    },
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
  ],
};

export default AuthRoutes;
