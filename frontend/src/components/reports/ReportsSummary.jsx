import {
    FileText,
    ShieldCheck,
    BrainCircuit,
    Activity
} from "lucide-react";

const stats = [

    {
        title: "Reports",
        value: "128",
        icon: FileText,
        color: "text-cyan-400"
    },

    {
        title: "Network Health",
        value: "98%",
        icon: ShieldCheck,
        color: "text-green-400"
    },

    {
        title: "AI Accuracy",
        value: "96%",
        icon: BrainCircuit,
        color: "text-purple-400"
    },

    {
        title: "Uptime",
        value: "99.98%",
        icon: Activity,
        color: "text-yellow-400"
    }

];

function ReportsSummary() {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {

                stats.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="bg-bg-surface border border-accent-secondary rounded-2xl p-6"
                        >

                            <Icon
                                size={30}
                                className={item.color}
                            />

                            <p className="text-text-secondary mt-4">

                                {item.title}

                            </p>

                            <h2 className="text-3xl font-bold text-text-primary mt-2">

                                {item.value}

                            </h2>

                        </div>

                    )

                })

            }

        </div>

    )

}

export default ReportsSummary;