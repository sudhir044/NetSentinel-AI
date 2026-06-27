import {
    Shield,
    Brain,
    Bot,
    Network,
    Database,
    TriangleAlert,
    ChartSpline,
    Lock,
} from "lucide-react";

export const features = [
    {
        title: "Air-Gapped AI",
        description:
            "Runs completely offline with zero cloud dependency.",
        icon: Shield,
    },

    {
        title: "Predictive Fault Detection",
        description:
            "Predict failures before they impact the network.",
        icon: Brain,
    },

    {
        title: "AI Network Copilot",
        description:
            "Ask questions in natural language.",
        icon: Bot,
    },

    {
        title: "Interactive Topology",
        description:
            "Visualize your MPLS network.",
        icon: Network,
    },

    {
        title: "Offline RAG",
        description:
            "Search local documentation instantly.",
        icon: Database,
    },

    {
        title: "Smart Alerts",
        description:
            "Reduce alert fatigue using AI.",
        icon: TriangleAlert,
    },

    {
        title: "Predictive Dashboard",
        description:
            "Latency, packet loss and analytics.",
        icon: ChartSpline,
    },

    {
        title: "Enterprise Security",
        description:
            "Designed for government deployments.",
        icon: Lock,
    },
];