import { Bell, Search } from "lucide-react";

function DashboardHeader() {
    return (
        <div className="flex items-center justify-between">
            <div>

                <h1 className="text-xl font-bold text-text-primary">
                    Dashboard </h1>

                <p className="text-text-secondary mt-2">
                    Monitor your AI-powered network operations.</p>

            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center bg-bg-surface border border-accent-secondary rounded-xl px-4 py-3">
                    <Search size={18} className="text-text-secondary" />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none ml-3 text-text-primary" />

                </div>

                <button className="w-12 h-12 rounded-xl bg-bg-surface border border-accent-secondary flex items-center justify-center">

                    <Bell size={20} className="text-text-primary" />

                </button>

            </div>

        </div>
    );
}

export default DashboardHeader;