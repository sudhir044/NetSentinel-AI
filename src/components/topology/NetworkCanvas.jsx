import { nodes, links } from "../../data/topology";

function NetworkCanvas() {

    return (

        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-8 h-[650px] relative overflow-hidden">

            <svg
                className="absolute inset-0 w-full h-full"
            >

                {links.map((link, index) => {

                    const from = nodes.find(n => n.id === link.from);

                    const to = nodes.find(n => n.id === link.to);

                    return (

                        <line

                            key={index}

                            x1={`${from.x}%`}

                            y1={`${from.y}%`}

                            x2={`${to.x}%`}

                            y2={`${to.y}%`}

                            stroke="#3B82F6"

                            strokeWidth="2"

                        />

                    )

                })}

            </svg>

            {nodes.map(node => (

                <div

                    key={node.id}

                    className="absolute -translate-x-1/2 -translate-y-1/2"

                    style={{

                        left: `${node.x}%`,

                        top: `${node.y}%`

                    }}

                >

                    <div

                        className={`w-5 h-5 rounded-full

          ${node.status === "healthy"

                                ?

                                "bg-green-400"

                                :

                                node.status === "warning"

                                    ?

                                    "bg-yellow-400"

                                    :

                                    "bg-red-500"

                            }

          `}

                    />

                    <p className="text-text-primary text-sm mt-2 whitespace-nowrap">

                        {node.name}

                    </p>

                </div>

            ))}

        </div>

    )

}

export default NetworkCanvas;