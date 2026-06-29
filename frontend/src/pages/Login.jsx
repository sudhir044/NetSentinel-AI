import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { login, isAuthenticated } = useAuth();
    
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            await login(email, password);

            navigate("/dashboard");
        } catch (err) {
            setError(
                err.response?.data?.message || "Login failed"
            );
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950">

            <div className="w-full max-w-md bg-slate-900 rounded-xl p-8 shadow-xl">

                <h1 className="text-3xl font-bold text-white mb-2">
                    NetSentinel AI
                </h1>

                <p className="text-gray-400 mb-8">
                    Sign in to continue
                </p>

                {error && (
                    <div className="mb-4 p-3 rounded bg-red-500/20 text-red-400">
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="email"
                        placeholder="Email"

                        value={email}

                        onChange={(e) =>
                            setEmail(e.target.value)
                        }

                        className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
                    />

                    <input
                        type="password"

                        placeholder="Password"

                        value={password}

                        onChange={(e) =>
                            setPassword(e.target.value)
                        }

                        className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
                    />

                    <button
                        disabled={loading}
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold p-3 rounded-lg transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

            </div>

        </div>
    );
}