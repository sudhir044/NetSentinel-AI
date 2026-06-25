import React, { useState } from "react";
import {
    LayoutDashboard,
    Bot,
    Network,
    BrainCircuit,
    TriangleAlert,
    BarChart3,
    Settings,
    Shield,
    Menu,
    Sun,
    Moon
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";

const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard },
    { title: "AI Copilot", icon: Bot },
    { title: "Network Topology", icon: Network },
    { title: "Predictions", icon: BrainCircuit },
    { title: "Alerts", icon: TriangleAlert },
    { title: "Reports", icon: BarChart3 },
    { title: "Settings", icon: Settings },
];

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <aside className={`h-screen shrink-0 bg-bg-primary border-r border-accent-secondary flex flex-col transition-all duration-300 relative ${isCollapsed ? 'w-20' : 'w-72'}`}>
            {/* Logo */}
            <div>
                <div className={`p-6 pb-4 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    {!isCollapsed && (
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-accent-primary flex items-center justify-center shrink-0">
                                <Shield className="text-text-primary" size={20} />
                            </div>
                            <div className="overflow-hidden whitespace-nowrap">
                                <h1 className="text-text-primary text-lg font-bold">NetSentinel AI</h1>
                            </div>
                        </div>
                    )}
                    <button 
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className={`text-text-secondary hover:text-text-primary transition-colors p-2 rounded-lg hover:bg-bg-elevated/50 ${isCollapsed ? '' : ''}`}
                    >
                        <Menu size={22} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="px-5">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        const path = item.title === "Dashboard" ? "/dashboard" : (item.title === "AI Copilot" ? "/copilot" : (item.title === "Network Topology" ? "/topology" : (item.title === "Alerts" ? "/alerts" : (item.title === "Settings" ? "/settings" : (item.title === "Reports" ? "/reports" : (item.title === "Predictions" ? "/predictions" : "/"))))));

                        return (
                            <Link
                                to={path}
                                key={index}
                                className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0' : 'gap-4 px-5'} py-4 rounded-xl text-text-hint hover:bg-bg-elevated hover:text-accent-primary transition-all duration-300 mb-2`}
                                title={isCollapsed ? item.title : ""}
                            >
                                <Icon size={22} className="shrink-0" />
                                {!isCollapsed && (
                                    <span className="font-medium whitespace-nowrap overflow-hidden transition-all duration-300">
                                        {item.title}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Footer */}
            <div className="p-6 mt-auto">
                <div className={`rounded-2xl border border-accent-secondary bg-bg-surface ${isCollapsed ? 'p-3 flex flex-col gap-4 items-center justify-center' : 'p-5'}`}>
                    
                    {/* Theme Toggle */}
                    <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between mb-4'}`}>
                        {!isCollapsed && <span className="text-text-secondary text-sm font-medium">Theme</span>}
                        <button 
                            onClick={toggleTheme}
                            className="text-text-hint hover:text-accent-primary transition p-1.5 rounded-lg hover:bg-bg-elevated"
                            title="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {!isCollapsed && (
                        <p className="text-text-secondary text-sm border-t border-accent-secondary pt-4">
                            System Status
                        </p>
                    )}

                    <div className={`flex items-center gap-3 ${!isCollapsed ? 'mt-3' : ''}`} title={isCollapsed ? "System Online" : ""}>
                        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                        {!isCollapsed && (
                            <span className="text-text-primary whitespace-nowrap overflow-hidden transition-all duration-300">
                                Online
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;