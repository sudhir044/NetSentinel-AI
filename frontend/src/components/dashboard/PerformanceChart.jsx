import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { performanceData } from "../../data/chartData";

function PerformanceChart() {
    return (
        <div className="rounded-2xl border border-accent-secondary bg-bg-surface/50 p-6 h-full flex flex-col min-h-0">

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-text-primary">
                        Network Performance</h2>

                    <p className="text-text-secondary">
                        Last 24 Hours </p>

                </div>

            </div>



            <ResponsiveContainer width="100%" height="85%">

                <LineChart data={performanceData}>

                    <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />

                    <XAxis
                        dataKey="time"
                        stroke="#94a3b8"
                    />

                    <YAxis
                        stroke="#94a3b8"
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="traffic"
                        stroke="#06b6d4"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
}

export default PerformanceChart;