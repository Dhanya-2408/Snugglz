import { Wishlist } from "../components/Wishlist";
import AuthGuard from "../layout/AuthGuard";
import Address from "../pages/Address";
import { Payment } from "../pages/Payment";
import Profile from "../pages/Profile";

const AuthVerifyRoutes = {
  path: "/",
  element: <AuthGuard />,
  children: [
    {
      path: "address",
      element: <Address />,
    },
    {
      path: "payment",
      element: <Payment />,
    },
    {
      path: "account",
      element: <Profile />,
    },
    {
      path: "wishlist",
      element: <Wishlist />,
    },
  ],
};

export default AuthVerifyRoutes;
