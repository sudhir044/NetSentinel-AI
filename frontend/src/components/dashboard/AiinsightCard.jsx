import { BrainCircuit, ShieldCheck, ArrowRight } from "lucide-react";
import { aiInsight } from "../../data/aiInsight";

function AIInsightCard() {
    return (
        <div className="rounded-2xl border border-accent-secondary bg-bg-surface/50 p-6 h-full">


            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-bg-elevated flex items-center justify-center">
                    <BrainCircuit className="text-accent-primary" size={20} />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-text-primary">
                        {aiInsight.title}
                    </h2>

                    <p className="text-text-secondary text-sm">
                        AI Generated Insight
                    </p>
                </div>
            </div>


            <div className="mt-8">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm">
                    {aiInsight.severity} Priority
                </span>

                <p className="mt-4 text-text-hint leading-7">
                    {aiInsight.message}
                </p>
            </div>


            <div className="mt-8 rounded-xl bg-bg-elevated/50 p-4">

                <div className="flex justify-between">

                    <span className="text-text-secondary">

                        Confidence

                    </span>

                    <span className="text-accent-primary font-bold">

                        {aiInsight.confidence}

                    </span>

                </div>

            </div>



            <div className="mt-8">

                <div className="flex items-center gap-2 mb-3">

                    <ShieldCheck className="text-green-400" size={20} />

                    <h3 className="text-text-primary font-semibold">

                        Recommended Action

                    </h3>

                </div>

                <p className="text-text-secondary leading-7">

                    {aiInsight.recommendation}

                </p>

            </div>


            <button className="mt-8 w-full rounded-xl bg-accent-primary hover:bg-accent-hover transition text-black font-semibold py-3 flex justify-center items-center gap-2">

                View Details

                <ArrowRight size={18} />

            </button>

        </div>
    );
}

export default AIInsightCard;