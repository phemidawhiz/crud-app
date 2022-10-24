import { useNavigate, useRoutes } from "react-router-dom";
import Container from "../components/Container";
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
  const navigate = useNavigate();
  return user ? (
    <>
      <Navbar />
      <PrivateRouteWrapper />
    </>
  ) : (
    <>
      <div className="h-[60px] flex flex-row justify-between items-center px-8 md:px-16 bg-purple text-white sticky top-0 mb-4">
        <h3 className="cursor-pointer" onClick={() => navigate("/auth")}>
          LOGO
        </h3>
      </div>
      <PublicRoutesWrapper />
    </>
  );
};
