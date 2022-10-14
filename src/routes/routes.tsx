import { lazy } from "react";
import { Navigate } from "react-router-dom";
import WithSuspense from "../components/WithSuspense";
import { AppRoute } from "../utils/types";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./constant";

const { AUTH_PAGE } = PUBLIC_ROUTES;
const { ALL_CONTRACTS, CREATE_CONTRACT, UPDATE_CONTRACT, VIEW_CONTRACT } =
  PRIVATE_ROUTES;

const AuthPage = WithSuspense(lazy(() => import("../pages/AuthPage")));
const AllContractsPage = WithSuspense(lazy(() => import("../pages/Homepage")));
const CreateContractPage = WithSuspense(lazy(() => import("../pages/Create")));
const UpdateContractPage = WithSuspense(
  lazy(() => import("../pages/UpdateContract"))
);
const ViewContractPage = WithSuspense(
  lazy(() => import("../pages/ViewContract"))
);

export const PublicRoutes: AppRoute[] = [
  { element: <AuthPage />, path: AUTH_PAGE },
  { element: <Navigate to={"/auth"} />, path: "*" },
];

export const PrivateRoutes: AppRoute[] = [
  { element: <AllContractsPage />, path: ALL_CONTRACTS },
  { element: <CreateContractPage />, path: CREATE_CONTRACT },
  { element: <UpdateContractPage />, path: UPDATE_CONTRACT },
  { element: <ViewContractPage />, path: VIEW_CONTRACT },
  { element: <Navigate to={ALL_CONTRACTS} />, path: "*" },
];
