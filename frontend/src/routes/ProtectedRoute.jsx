import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { loading, isAuthenticated } = useAuth();

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <h2 className="text-2xl font-semibold">Loading...</h2>
            </div>
        );
    }

    return isAuthenticated ? children : <Navigate to="/login" replace />;
}