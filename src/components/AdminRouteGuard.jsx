import { Navigate } from "react-router-dom";
import useAdminCheck from "../hooks/useAdminCheck";

export default function AdminRouteGuard({ children }) {
  const isAdmin = useAdminCheck();
  if (!isAdmin) return <Navigate to="/" replace />;
  return children;
}
