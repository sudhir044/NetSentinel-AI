import {
    BrainCircuit,
    ShieldAlert,
    Gauge,
    Target,
} from "lucide-react";

const stats = [
    {
        title: "Total Predictions",
        value: "42",
        icon: BrainCircuit,
        color: "text-accent-primary",
    },
    {
        title: "Critical Risks",
        value: "5",
        icon: ShieldAlert,
        color: "text-red-400",
    },
    {
        title: "AI Accuracy",
        value: "96.8%",
        icon: Target,
        color: "text-green-400",
    },
    {
        title: "Confidence",
        value: "94%",
        icon: Gauge,
        color: "text-yellow-400",
    },
];

function PredictionSummary() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {stats.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="bg-bg-surface border border-accent-secondary rounded-2xl p-6"
                    >

                        <Icon
                            className={item.color}
                            size={32}
                        />

                        <p className="text-text-secondary mt-4">
                            {item.title}
                        </p>

                        <h2 className="text-3xl font-bold text-text-primary mt-2">
                            {item.value}
                        </h2>

                    </div>

                );

            })}

        </div>
    );
}

export default PredictionSummary;