import MainLayout from "../components/layout/MainLayout";

import NetworkCanvas from "../components/topology/NetworkCanvas";
import TopologyStats from "../components/topology/TopologyStats";
import LinkActivity from "../components/topology/LinkActivity";
import NodeDetails from "../components/topology/NodeDetails";

function Topology() {
    return (
        <MainLayout>

            {/* Header */}

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-text-primary">

                    Network Topology

                </h1>

                <p className="text-text-secondary mt-2">

                    Monitor enterprise MPLS / SD-WAN infrastructure in real time.

                </p>

            </div>

            {/* Network */}

            <NetworkCanvas />

            {/* Stats */}

            <TopologyStats />

            {/* Bottom */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

                <LinkActivity />

                <NodeDetails />

            </div>

        </MainLayout>
    );
}

export default Topology;