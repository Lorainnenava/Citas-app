import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { TProtectedLogin } from "./types";

export const RouteProtectedIsLogin: FC<TProtectedLogin> = ({
  isAllowed,
  children,
  redirectTo = "/Admin",
}) => {
  if (isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};
