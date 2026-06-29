import { createContext, useContext, useEffect, useState } from "react";
import {
    login as loginService,
    register as registerService,
    getProfile,
} from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await getProfile();

                // Your backend returns:
                // { success, data, message }

                setUser(response.data);
            } catch (error) {
                console.error(error);

                localStorage.removeItem("token");

                setUser(null);
            }

            setLoading(false);
        }

        loadUser();
    }, []);

    async function login(email, password) {
        const response = await loginService(email, password);

        localStorage.setItem(
            "token",
            response.data.token
        );

        setUser(response.data.user);

        return response;
    }

    async function register(userData) {
        const response = await registerService(userData);

        localStorage.setItem(
            "token",
            response.data.token
        );

        setUser(response.data.user);

        return response;
    }

    function logout() {
        localStorage.removeItem("token");
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}