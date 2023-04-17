import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../store/app/hooks";

interface IPricateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: IPricateRouteProps) => {
  const isLogged = useAppSelector((state) => state.ui.logged);
  return isLogged ? <>{children}</> : <Navigate to="/home" />;
};

export default PrivateRoute;