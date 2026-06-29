import { Eye } from "lucide-react";

function AlertTable({ alerts }) {
    return (
        <div className="rounded-2xl border border-accent-secondary bg-bg-surface/50 p-6 h-full flex flex-col min-h-0">

            <div className="flex items-center justify-between mb-6 flex-shrink-0">
                <div>
                    <h2 className="text-2xl font-semibold text-text-primary">
                        Recent Alerts
                    </h2>
                    <p className="text-text-secondary">

                        Live network incidents
                    </p>

                </div>
            </div>

            <div className="overflow-x-auto flex-1 overflow-y-auto min-h-0 custom-scrollbar">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-accent-secondary text-text-secondary">
                            <th className="text-left py-4">Device</th>
                            <th className="text-left py-4">Location</th>
                            <th className="text-left py-4">Severity</th>
                            <th className="text-left py-4">Status</th>
                            <th className="text-left py-4">Time</th>
                            <th className="text-center py-4">Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {alerts.map((alert) => (
                            <tr
                                key={alert.id}
                                className="border-b border-accent-secondary hover:bg-bg-elevated/40 transition" >

                                <td className="py-5 text-text-primary">
                                    {alert.device}
                                </td>
                                <td className="text-text-secondary">
                                    {alert.location}
                                </td>

                                <td>

                                    <span className={`px-3 py-1 rounded-full text-sm
                                    ${alert.severity === "Critical"
                                            ? "bg-red-500/10 text-red-400"
                                            : alert.severity === "Warning"
                                                ? "bg-yellow-500/10 text-yellow-400"
                                                : "bg-green-500/10 text-green-400"}`}>

                                        {alert.severity}

                                    </span>

                                </td>

                                <td>

                                    <span className={`px-3 py-1 rounded-full text-sm
                                    ${alert.status === "Active"
                                            ? "bg-bg-elevated text-accent-primary"
                                            : "bg-green-500/10 text-green-400"}`}>

                                        {alert.status}

                                    </span>

                                </td>

                                <td className="text-text-secondary">

                                    {alert.time}

                                </td>

                                <td className="text-center">

                                    <button className="p-2 rounded-lg hover:bg-bg-elevated transition">

                                        <Eye
                                            size={18}
                                            className="text-accent-primary"
                                        />

                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default AlertTable;