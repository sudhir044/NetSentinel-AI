
import { cities } from "../../data/cities";
import { connections } from "../../data/connections";

import Node from "./Node";
import Connection from "./Connection";

function NetworkLayer() {

    return (

        <div className="absolute inset-0">

            {/* Connections */}

            {connections.map((connection, index) => {

                const from = cities.find(
                    (city) => city.id === connection.from
                );

                const to = cities.find(
                    (city) => city.id === connection.to
                );

                if (!from || !to) return null;

                return (
                    <Connection
                        key={index}
                        from={from}
                        to={to}
                    />
                );

            })}

            {/* Nodes */}

            {cities.map((city) => (
                <Node
                    key={city.id}
                    city={city}
                />
            ))}

        </div>

    );
}

export default NetworkLayer;