import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({ children }) {
  
  const location = useLocation();

  // ProtectedRoute.jsx
const token = localStorage.getItem("token");
if (!token)
  return <Navigate to="/login" replace state={{ from: location }} />;


  return children;
}
