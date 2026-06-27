import { Shield, Menu, ArrowRight, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";

function Navbar() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className="h-20 border-b border-accent-secondary">
            <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary flex items-center justify-center shadow-lg shadow-accent-primary/20">
                        <Shield size={26} className="text-text-primary" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-text-primary">
                            NOC Copilot
                        </h1>
                        <p className="text-xs text-text-secondary">
                            Air-Gapped AI Platform
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    <a href="#home" className="text-text-hint hover:text-accent-primary transition">
                        Home
                    </a>
                    <a href="#features" className="text-text-hint hover:text-accent-primary transition">
                        Features
                    </a>
                    <a href="#architecture" className="text-text-hint hover:text-accent-primary transition">
                        Architecture
                    </a>
                    <a href="#team" className="text-text-hint hover:text-accent-primary transition">
                        Team
                    </a>
                    <Link to="/dashboard" className="text-text-hint hover:text-accent-primary transition">
                        Dashboard
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    
                    {/* Theme Toggle */}
                    <button 
                        onClick={toggleTheme}
                        className="text-text-hint hover:text-accent-primary transition p-2 rounded-full hover:bg-bg-elevated/50"
                        title="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <Link
                        to="/dashboard"
                        className="hidden md:flex items-center gap-2 rounded-xl bg-accent-primary hover:bg-accent-hover px-6 py-3 text-text-primary font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/20"
                    >
                        Launch Dashboard
                        <ArrowRight size={18} />
                    </Link>

                    {/* Mobile */}
                    <button className="lg:hidden text-text-primary">
                        <Menu />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;