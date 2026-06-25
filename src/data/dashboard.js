import {
    Activity,
    TriangleAlert,
    BrainCircuit,
    Gauge,
} from "lucide-react";

export const dashboardMetrics = [
    {
        title: "Healthy Nodes",
        value: "98%",
        change: "+2.3%",
        color: "green",
        icon: Activity,
    },
    {
        title: "Critical Alerts",
        value: "04",
        change: "-1",
        color: "red",
        icon: TriangleAlert,
    },
    {
        title: "AI Accuracy",
        value: "96.8%",
        change: "+0.8%",
        color: "cyan",
        icon: BrainCircuit,
    },
    {
        title: "Avg. Latency",
        value: "18 ms",
        change: "-3 ms",
        color: "yellow",
        icon: Gauge,
    },
];