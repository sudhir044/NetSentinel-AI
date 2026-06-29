import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await register(form);
            navigate("/dashboard");
        } catch (err) {
            setError(
                err.response?.data?.message || "Registration failed"
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
            <div className="w-full max-w-md bg-slate-900 rounded-xl p-8">

                <h1 className="text-3xl text-white font-bold mb-6">
                    Create Account
                </h1>

                {error && (
                    <p className="text-red-400 mb-4">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-800 text-white"
                    />

                    <input
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-800 text-white"
                    />

                    <input
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-800 text-white"
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-800 text-white"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-800 text-white"
                    />

                    <button
                        className="w-full bg-cyan-500 text-black p-3 rounded font-bold"
                    >
                        Register
                    </button>

                </form>

                <p className="text-gray-400 mt-5">
                    Already have an account?{" "}
                    <Link
                        className="text-cyan-400"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}