import { Activity, ShieldAlert, BrainCircuit, Clock } from "lucide-react";

function MetricCard({ metric }) {
    let Icon = Activity;
    if (metric.title === "Critical Alerts") Icon = ShieldAlert;
    else if (metric.title === "AI Accuracy") Icon = BrainCircuit;
    else if (metric.title === "Avg. Latency") Icon = Clock;
    
    // Use metric.icon if provided, otherwise use mapped Icon
    Icon = metric.icon || Icon;

    const colorStyles = {
        green: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
        red: { text: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
        cyan: { text: "text-accent-primary", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
        yellow: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
    };

    const style = colorStyles[metric.color] || colorStyles.cyan;

    return (
        <div className="group relative rounded-xl border border-accent-secondary/80 bg-bg-surface/50 backdrop-blur-sm p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/5 hover:border-accent-secondary overflow-hidden">
            {/* Subtle Gradient Glow Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="flex justify-between items-start relative z-10">
                <div className="flex flex-col">
                    <span className="text-text-secondary text-[11px] font-semibold tracking-wider uppercase mb-1">
                        {metric.title}
                    </span>

                    <h2 className="text-2xl font-bold text-text-primary tracking-tight mt-0.5">
                        {metric.value}
                    </h2>

                    <div className="flex items-center gap-1.5 mt-2.5">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${style.bg} ${style.text}`}>
                            {metric.change}
                        </span>
                    </div>
                </div>

                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${style.bg} border ${style.border} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={18} className={style.text} />
                </div>
            </div>
        </div>
    );
}

export default MetricCard;