import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import InfoRoutes from "./InfoRoutes";
import AuthRoutes from "./AuthRoutes";
import AuthVerifyRoutes from "./AuthVerifyRoutes";

const all_routes = [AuthRoutes, MainRoutes, InfoRoutes, AuthVerifyRoutes];

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
  return useRoutes(all_routes);
}
