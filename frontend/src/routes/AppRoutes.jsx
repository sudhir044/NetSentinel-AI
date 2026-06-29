import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Shield } from "lucide-react";

import Home from "../components/landing/Home.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import Copilot from "../pages/Copilot.jsx"
import Logs from "../pages/Logs.jsx"
import Settings from "../pages/Settings.jsx"
import Topology from "../pages/Topology.jsx"
import Alerts from "../pages/Alerts.jsx"
import Reports from "../pages/Reports.jsx"
import AIModels from "../pages/AIModels.jsx"
import Predictions from "../pages/Predictions.jsx"
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register";

function RouteTransition() {
    const location = useLocation();
    const [isRouting, setIsRouting] = useState(false);

    useEffect(() => {
        setIsRouting(true);
        const timer = setTimeout(() => setIsRouting(false), 800);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <AnimatePresence>
            {isRouting && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 rounded-2xl bg-accent-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                    >
                        <Shield className="text-text-primary w-8 h-8" />
                    </motion.div>
                    <Loader2 className="w-8 h-8 text-cyan-500 animate-spin mb-4" />
                    <h2 className="text-text-primary text-xl font-bold tracking-wide">NetSentinel AI</h2>
                    <p className="text-cyan-500/80 text-sm mt-2 font-medium tracking-widest uppercase animate-pulse">Initializing Module...</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function AppRoutes() {
    return (
        <>
            <RouteTransition />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/copilot"
                    element={
                        <ProtectedRoute>
                            <Copilot />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/ai-models"
                    element={
                        <ProtectedRoute>
                            <AIModels />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/predictions"
                    element={
                        <ProtectedRoute>
                            <Predictions />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/alerts"
                    element={
                        <ProtectedRoute>
                            <Alerts />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/logs"
                    element={
                        <ProtectedRoute>
                            <Logs />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute>
                            <Settings />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/reports"
                    element={
                        <ProtectedRoute>
                            <Reports />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/topology"
                    element={
                        <ProtectedRoute>
                            <Topology />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    )
}


