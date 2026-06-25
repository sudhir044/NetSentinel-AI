import {
    Settings,
    Palette,
    BrainCircuit,
    Bell,
    PlugZap,
    Shield,
} from "lucide-react";

const tabs = [
    {
        name: "General",
        icon: Settings,
    },
    {
        name: "Appearance",
        icon: Palette,
    },
    {
        name: "AI",
        icon: BrainCircuit,
    },
    {
        name: "Notifications",
        icon: Bell,
    },
    {
        name: "Integrations",
        icon: PlugZap,
    },
    {
        name: "Security",
        icon: Shield,
    },
];

function SettingsTabs({ activeTab, setActiveTab }) {
    return (
        <div className="flex flex-wrap gap-4 border-b border-accent-secondary pb-4">


            {tabs.map((tab) => {

                const Icon = tab.icon;

                return (

                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300

            ${activeTab === tab.name
                                ? "bg-accent-primary text-black"
                                : "bg-bg-surface border border-accent-secondary text-text-primary hover:border-accent-secondary"
                            }`}
                    >

                        <Icon size={18} />

                        {tab.name}

                    </button>

                );

            })}

        </div>
    );
}

export default SettingsTabs;