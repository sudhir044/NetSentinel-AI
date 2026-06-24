import {
    Network,
    Radar,
    BrainCircuit,
    ChartSpline,
    LayoutDashboard
} from "lucide-react";

const architecture = [
    {
        title: "Network Device",
        description: "Routers, switches and edge device generation telemetry.",
        icon: Network,
    }, {
        title: "Telemetry",
        description: "Collects logs, metrics and network events securely.",
        icon: Radar,
    },
    {
        title: "AI Engine",
        description: "Offline Ollama LLM analyzes incidents and root causes.",
        icon: BrainCircuit,
    },
    {
        title: "Prediction",
        description: "Predicts failures before they impact the network.",
        icon: ChartSpline,
    },
    {
        title: "Dashboard",
        description: "Visualizes insights and recommendations for operators.",
        icon: LayoutDashboard,
    },
]
function Architecture() {
    return (
        <section
            id="architecture"
            className="relative py-32 bg-[#020817]"
        >
            {/* Background Glow */}

            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-8">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto">

                    <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">

                        Architecture

                    </span>

                    <h2 className="mt-6 text-5xl font-bold text-white">

                        How NetSentinel AI Works

                    </h2>

                    <p className="mt-6 text-slate-400 text-lg leading-8">

                        A secure AI-powered workflow that transforms raw network telemetry
                        into intelligent insights and predictive recommendations.

                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid lg:grid-cols-5 md:grid-cols-2 gap-8">

                    {architecture.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="relative rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                                    <Icon size={34} className="text-cyan-400" />

                                </div>

                                <h3 className="mt-8 text-xl font-semibold text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-4 text-slate-400 leading-7">

                                    {item.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

                {/* Flow */}

                <div className="hidden lg:flex justify-center items-center mt-10 text-cyan-400 text-3xl tracking-[35px]">

                    →
                    →
                    →
                    →
                </div>

                {/* Bottom */}

                <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-center">

                    <h3 className="text-2xl font-semibold text-white">

                        Fully Air-Gapped Architecture

                    </h3>

                    <p className="mt-4 text-slate-400 max-w-3xl mx-auto leading-8">

                        Every component operates locally without requiring cloud
                        connectivity, ensuring maximum security, privacy and compliance
                        for critical infrastructure environments.

                    </p>

                </div>

            </div>
        </section>
    );
}

export default Architecture;