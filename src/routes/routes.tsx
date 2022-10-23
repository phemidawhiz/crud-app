import { lazy } from "react";
import { Navigate } from "react-router-dom";
import WithSuspense from "../components/WithSuspense";
import { AppRoute } from "../utils/types";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./constant";

const { AUTH_PAGE, FORGOT_PASSWORD, RESET_PASSWORD } = PUBLIC_ROUTES;
const { ALL_CONTRACTS, CREATE_CONTRACT, UPDATE_CONTRACT, VIEW_CONTRACT } =
  PRIVATE_ROUTES;

const AuthPage = WithSuspense(lazy(() => import("../pages/AuthPage")));
const AllContractsPage = WithSuspense(lazy(() => import("../pages/Homepage")));
const CreateContractPage = WithSuspense(
  lazy(() => import("../pages/CreateContract"))
);
const UpdateContractPage = WithSuspense(
  lazy(() => import("../pages/UpdateContract"))
);
const ViewContractPage = WithSuspense(
  lazy(() => import("../pages/ViewContract"))
);
const ForgotPassword = WithSuspense(
  lazy(() => import("../pages/AuthPage/ForgotPassword"))
);
const ResetPassword = WithSuspense(
  lazy(() => import("../pages/AuthPage/ResetPassword"))
);

export const PublicRoutes: AppRoute[] = [
  { element: <AuthPage />, path: AUTH_PAGE },
  { element: <ForgotPassword />, path: FORGOT_PASSWORD },
  { element: <ResetPassword />, path: RESET_PASSWORD },

  { element: <Navigate to={"/auth"} />, path: "*" },
];

export const PrivateRoutes: AppRoute[] = [
  { element: <AllContractsPage />, path: ALL_CONTRACTS },
  { element: <CreateContractPage />, path: CREATE_CONTRACT },
  { element: <UpdateContractPage />, path: UPDATE_CONTRACT },
  { element: <ViewContractPage />, path: VIEW_CONTRACT },
  { element: <Navigate to={ALL_CONTRACTS} />, path: "*" },
];
