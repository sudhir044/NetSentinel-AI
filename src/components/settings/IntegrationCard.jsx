import {
    Database,
    Server,
    Cpu,
    Globe,
    CheckCircle2,
    RefreshCw,
    Save,
} from "lucide-react";

const integrations = [
    {
        name: "FastAPI",
        status: "Connected",
        icon: Server,
        color: "text-green-400",
    },
    {
        name: "Ollama",
        status: "Connected",
        icon: Cpu,
        color: "text-green-400",
    },
    {
        name: "MongoDB",
        status: "Connected",
        icon: Database,
        color: "text-green-400",
    },
    {
        name: "Vector Database",
        status: "Connected",
        icon: Database,
        color: "text-green-400",
    },
    {
        name: "Prometheus",
        status: "Connected",
        icon: Globe,
        color: "text-green-400",
    },
    {
        name: "Grafana",
        status: "Disconnected",
        icon: Globe,
        color: "text-red-400",
    },
];

function IntegrationCard() {
    return (
        <div className="bg-bg-surface/50 border border-accent-secondary rounded-2xl p-6">

            {/* Header */}

            <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-xl bg-bg-elevated flex items-center justify-center">

                    <Globe className="text-accent-primary" />

                </div>

                <div>

                    <h2 className="text-2xl font-semibold text-text-primary">

                        Integrations

                    </h2>

                    <p className="text-text-secondary text-sm">

                        Connected services and APIs

                    </p>

                </div>

            </div>

            {/* Integration List */}

            <div className="space-y-4">

                {integrations.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.name}
                            className="flex items-center justify-between rounded-xl bg-bg-elevated p-4"
                        >

                            <div className="flex items-center gap-3">

                                <Icon className="text-accent-primary" size={20} />

                                <span className="text-text-primary">

                                    {item.name}

                                </span>

                            </div>

                            <div className={`flex items-center gap-2 ${item.color}`}>

                                <CheckCircle2 size={18} />

                                <span>

                                    {item.status}

                                </span>

                            </div>

                        </div>

                    );

                })}

            </div>

            {/* Buttons */}

            <div className="flex gap-3 mt-8">

                <button className="flex-1 flex justify-center items-center gap-2 rounded-xl border border-accent-secondary py-3 text-text-primary hover:border-accent-secondary transition">

                    <RefreshCw size={18} />

                    Test Connection

                </button>

                <button className="flex-1 flex justify-center items-center gap-2 rounded-xl bg-accent-primary hover:bg-accent-hover transition py-3 text-black font-semibold">

                    <Save size={18} />

                    Save

                </button>

            </div>

        </div>
    );
}

export default IntegrationCard;