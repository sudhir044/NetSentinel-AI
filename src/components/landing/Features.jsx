import { features } from "../../data/features";

function FeatureCard({ feature }) {
    const Icon = feature.icon;

    return (
        <div className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition" />

            {/* Icon */}
            <div className="relative w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                <Icon className="text-cyan-400" size={34} />

            </div>

            {/* Title */}

            <h3 className="relative mt-8 text-2xl font-semibold text-white">

                {feature.title}

            </h3>

            {/* Description */}

            <p className="relative mt-4 text-slate-400 leading-7">

                {feature.description}

            </p>

        </div>
    );
}

function Features() {
    return (
        <section id="features" className="w-full max-w-7xl mx-auto px-6 py-24">

            {/* Section Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-6">
                    Features
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Built for{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        Mission-Critical
                    </span>{" "}
                    Networks
                </h2>
                <p className="max-w-2xl mx-auto text-slate-400 text-lg">
                    Every feature is designed to work offline, ensuring zero cloud dependency
                    for sensitive government and enterprise networks.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                ))}
            </div>

        </section>
    );
}

export default Features;