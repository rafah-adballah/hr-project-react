import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/authContext";

const ProtectedRoute = (props) => {
  const { user } = useContext(AuthContext);
  return <>{user ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default ProtectedRoute;
