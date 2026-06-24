


import { Shield, Menu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#020817]/80 backdrop-blur-xl border-b border-slate-800">
            <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

                {/* Logo */}

                <Link to="/" className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">

                        <Shield size={26} className="text-white" />

                    </div>

                    <div>

                        <h1 className="text-xl font-bold text-white">

                            NOC Copilot

                        </h1>

                        <p className="text-xs text-slate-400">

                            Air-Gapped AI Platform

                        </p>

                    </div>

                </Link>

                {/* Navigation */}

                <nav className="hidden lg:flex items-center gap-10">

                    <a
                        href="#home"
                        className="text-slate-300 hover:text-cyan-400 transition"
                    >
                        Home
                    </a>

                    <a
                        href="#features"
                        className="text-slate-300 hover:text-cyan-400 transition"
                    >
                        Features
                    </a>

                    <a
                        href="#architecture"
                        className="text-slate-300 hover:text-cyan-400 transition"
                    >
                        Architecture
                    </a>

                    <a
                        href="#team"
                        className="text-slate-300 hover:text-cyan-400 transition"
                    >
                        Team
                    </a>

                    <Link
                        to="/dashboard"
                        className="text-slate-300 hover:text-cyan-400 transition"
                    >
                        Dashboard
                    </Link>

                </nav>

                {/* Right Side */}

                <div className="flex items-center gap-4">

                    <Link
                        to="/dashboard"
                        className="hidden md:flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                    >

                        Launch Dashboard

                        <ArrowRight size={18} />

                    </Link>

                    {/* Mobile */}

                    <button className="lg:hidden text-white">

                        <Menu />

                    </button>

                </div>

            </div>
        </header>
    );
}

export default Navbar;