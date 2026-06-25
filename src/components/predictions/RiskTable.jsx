const devices = [
    {
        name: "Router R-203",
        risk: "89%",
        status: "Critical",
    },
    {
        name: "Switch SW-105",
        risk: "74%",
        status: "Warning",
    },
    {
        name: "Firewall FW-301",
        risk: "38%",
        status: "Low",
    },
];

function RiskTable() {
    return (
        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-6">

            <h2 className="text-2xl font-semibold text-text-primary">

                Top Risk Devices

            </h2>

            <div className="mt-6 space-y-4">

                {devices.map((item) => (

                    <div
                        key={item.name}
                        className="flex justify-between border-b border-accent-secondary pb-4"
                    >

                        <div>

                            <h3 className="text-text-primary">

                                {item.name}

                            </h3>

                            <p className="text-text-secondary">

                                Risk: {item.risk}

                            </p>

                        </div>

                        <span
                            className={
                                item.status === "Critical"
                                    ? "text-red-400"
                                    : item.status === "Warning"
                                        ? "text-yellow-400"
                                        : "text-green-400"
                            }
                        >

                            {item.status}

                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default RiskTable;