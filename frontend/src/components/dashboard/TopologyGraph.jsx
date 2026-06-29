

function TopologyGraph({ nodes, links }) {
    return (
        <div className="rounded-2xl border border-accent-secondary bg-bg-surface/50 p-6 h-full flex flex-col min-h-0">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 flex-shrink-0">
                Network Topology </h2>

            <div className="relative w-full flex-1 min-h-0">

                <svg className="absolute inset-0 w-full h-full">

                    {links.map((link, index) => {
                        const from = nodes.find((n) => n.id === link.from);
                        const to = nodes.find((n) => n.id === link.to);

                        return (
                            <line
                                key={index}
                                x1={`${from.x}%`}
                                y1={`${from.y}%`}
                                x2={`${to.x}%`}
                                y2={`${to.y}%`}
                                stroke="#06b6d4"
                                strokeWidth="2"
                            />
                        );

                    })}

                </svg>



                {nodes.map((node) => (
                    <div
                        key={node.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                        }}>

                        <div className={`w-5 h-5 rounded-full border-4
                           ${node.status === "healthy"
                                ? "bg-green-400 border-green-300"
                                : node.status === "warning"
                                    ? "bg-yellow-400 border-yellow-300"
                                    : "bg-red-500 border-red-300"
                            }`} />

                        <p className="text-xs text-text-primary mt-2 whitespace-nowrap">
                            {node.name} </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default TopologyGraph;