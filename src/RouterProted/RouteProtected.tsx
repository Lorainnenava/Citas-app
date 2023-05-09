import { Navigate, Outlet } from "react-router-dom";
import { TProtectedLogin } from "./types";
import { FC } from "react";

export const ProtectedRoute: FC<TProtectedLogin> = ({
  isAllowed,
  children,
  redirectTo = "/",
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};
