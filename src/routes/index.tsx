import { useRoutes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { userKey } from "../utils/data";
import { PrivateRoutes, PublicRoutes } from "./routes";

const PrivateRouteWrapper = () => {
  const routes = useRoutes(PrivateRoutes);
  return routes;
};

const PublicRoutesWrapper = () => {
  const routes = useRoutes(PublicRoutes);
  return routes;
};
export const Pages = () => {
  const user = !!localStorage.getItem(userKey);
  return user ? (
    <>
      <Navbar />
      <PrivateRouteWrapper />
    </>
  ) : (
    <PublicRoutesWrapper />
  );
};
