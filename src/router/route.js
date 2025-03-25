import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/AuthProvider";

const PrivateRoute = () => {
    const user = useAuth();
    if (!user.token) return <Navigate to="/login" />; // Should return to 404 page....will implement later on
    return <Outlet />;
};

export default PrivateRoute;