import {

    Activity,

    Gauge,

    Wifi,

    ShieldCheck

} from "lucide-react";

const stats = [

    {

        title: "Healthy Nodes",

        value: "18",

        icon: ShieldCheck,

        color: "text-green-400"

    },

    {

        title: "Critical Nodes",

        value: "2",

        icon: Activity,

        color: "text-red-400"

    },

    {

        title: "Avg Latency",

        value: "18 ms",

        icon: Gauge,

        color: "text-accent-primary"

    },

    {

        title: "Bandwidth",

        value: "2.4 Gbps",

        icon: Wifi,

        color: "text-blue-400"

    }

]

function TopologyStats() {

    return (

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

            {

                stats.map((item, index) => {

                    const Icon = item.icon;

                    return (

                        <div

                            key={index}

                            className="bg-bg-surface border border-accent-secondary rounded-2xl p-6"

                        >

                            <Icon

                                className={item.color}

                                size={30}

                            />

                            <p className="text-text-secondary mt-4">

                                {item.title}

                            </p>

                            <h2 className="text-3xl text-text-primary font-bold mt-2">

                                {item.value}

                            </h2>

                        </div>

                    )

                })

            }

        </div>

    )

}

export default TopologyStats;