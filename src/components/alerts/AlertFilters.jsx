import { Search } from "lucide-react";

function AlertFilters() {
    return (
        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-5 mt-8">

            <div className="flex flex-wrap gap-4">

                <div className="flex items-center flex-1 bg-bg-elevated rounded-xl px-4">

                    <Search
                        className="text-text-secondary"
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Search alerts..."
                        className="w-full bg-transparent p-3 text-text-primary outline-none"
                    />

                </div>

                <select className="bg-bg-elevated rounded-xl px-4 py-3 text-text-primary">
                    <option>All Severity</option>
                    <option>Critical</option>
                    <option>Warning</option>
                    <option>Low</option>
                </select>

                <select className="bg-bg-elevated rounded-xl px-4 py-3 text-text-primary">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Resolved</option>
                </select>

                <button className="bg-cyan-500 hover:bg-cyan-400 px-6 rounded-xl text-black font-semibold">

                    Export

                </button>

            </div>

        </div>
    );
}

export default AlertFilters;