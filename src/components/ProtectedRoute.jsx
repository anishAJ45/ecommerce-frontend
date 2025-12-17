import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
