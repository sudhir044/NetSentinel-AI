import { predictions } from "../../data/predictions";
import {
    BrainCircuit,
    Clock3,
    TriangleAlert,
} from "lucide-react";

function PredictionList() {
    return (
        <div className="rounded-2xl border border-accent-secondary bg-bg-surface/50 p-6 h-full flex flex-col min-h-0">
            <div className="flex items-center gap-3 mb-6 flex-shrink-0">

                <BrainCircuit
                    className="text-accent-primary"
                    size={28} />

                <div>
                    <h2 className="text-xl font-semibold text-text-primary">
                        AI Predictions </h2>

                    <p className="text-text-secondary text-sm">
                        Failure Forecast </p>
                </div>

            </div>

            <div className="space-y-4 flex-1 overflow-y-auto min-h-0 pr-2 custom-scrollbar">

                {predictions.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-xl border border-accent-secondary bg-bg-elevated/40 p-4   hover:border-accent-secondary transition">

                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-text-primary font-semibold">
                                    {item.device} </h3>

                                <p className="text-text-secondary text-sm">
                                    {item.location} </p>

                            </div>

                            <TriangleAlert
                                className={
                                    item.severity === "Critical"
                                        ? "text-red-400"
                                        : item.severity === "Warning"
                                            ? "text-yellow-400"
                                            : "text-green-400"
                                } />

                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-text-secondary">
                                    Failure Probability </span>

                                <span className="text-text-primary">
                                    {item.probability} </span>

                            </div>
                            <div className="w-full h-2 bg-bg-elevated rounded-full mt-2">
                                <div
                                    className="h-2 rounded-full bg-cyan-400"
                                    style={{
                                        width: `${item.probability}%`,
                                    }} />

                            </div>

                        </div>

                        <div className="flex items-center gap-2 mt-4 text-text-secondary text-sm">
                            <Clock3 size={16} />
                            Estimated Failure: {item.eta}</div>
                    </div>

                ))}

            </div>

        </div>
    );
}

export default PredictionList;