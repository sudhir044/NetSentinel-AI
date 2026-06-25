import { Eye, CheckCircle } from "lucide-react";

const alerts = [
    {
        device: "Router R-203",
        severity: "Critical",
        status: "Active",
        time: "12:35 PM"
    },
    {
        device: "Switch SW-105",
        severity: "Warning",
        status: "Active",
        time: "12:48 PM"
    },
    {
        device: "Firewall FW-301",
        severity: "Low",
        status: "Resolved",
        time: "01:15 PM"
    }
];

function AlertTable() {
    return (
        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-6 mt-8 overflow-x-auto">

            <table className="w-full">

                <thead>

                    <tr className="text-text-secondary border-b border-accent-secondary">

                        <th className="text-left py-4">Device</th>
                        <th className="text-left">Severity</th>
                        <th className="text-left">Status</th>
                        <th className="text-left">Time</th>
                        <th className="text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {alerts.map((item) => (

                        <tr
                            key={item.device}
                            className="border-b border-accent-secondary hover:bg-bg-elevated/40"
                        >

                            <td className="py-5 text-text-primary">
                                {item.device}
                            </td>

                            <td className={
                                item.severity === "Critical"
                                    ? "text-red-400"
                                    : item.severity === "Warning"
                                        ? "text-yellow-400"
                                        : "text-green-400"
                            }>
                                {item.severity}
                            </td>

                            <td className="text-cyan-400">
                                {item.status}
                            </td>

                            <td className="text-text-secondary">
                                {item.time}
                            </td>

                            <td>

                                <div className="flex justify-center gap-3">

                                    <button>

                                        <Eye className="text-cyan-400" />

                                    </button>

                                    <button>

                                        <CheckCircle className="text-green-400" />

                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default AlertTable;