


import {
    Code2,
    Database,
    BrainCircuit,
    ShieldCheck,
} from "lucide-react";

const members = [
    {
        role: "Frontend Developer",
        icon: <Code2 size={34} />,
        description:
            "Builds responsive UI, dashboard, animations and user experience.",
    },
    {
        role: "Backend Developer",
        icon: <Database size={34} />,
        description:
            "Develops APIs, authentication and integrates backend services.",
    },
    {
        role: "AI / ML Engineer",
        icon: <BrainCircuit size={34} />,
        description:
            "Builds predictive models, RAG pipeline and LLM integration.",
    },
    {
        role: "Network Engineer",
        icon: <ShieldCheck size={34} />,
        description:
            "Designs SD-WAN/MPLS topology, telemetry and security workflows.",
    },
];

function Team() {
    return (
        <section
            id="team"
            className="relative py-28 bg-[#020817] overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-8">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto">

                    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
                        Our Team
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Built by a
                        <span className="text-cyan-400"> Multidisciplinary Team</span>
                    </h2>

                    <p className="mt-6 text-slate-400 text-lg leading-8">
                        Combining expertise in AI, Networking and Full Stack
                        Development to build an intelligent offline NOC platform.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    {members.map((member, index) => (

                        <div
                            key={index}
                            className="rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8 hover:border-cyan-500 transition duration-300"
                        >

                            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">

                                {member.icon}

                            </div>

                            <h3 className="mt-8 text-xl font-semibold text-white">

                                {member.role}

                            </h3>

                            <p className="mt-4 text-slate-400 leading-7">

                                {member.description}

                            </p>

                            {/* Placeholder */}

                            <div className="mt-8 h-12 rounded-xl border border-dashed border-slate-700 flex items-center justify-center text-slate-500 text-sm">

                                Member Name

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Team;