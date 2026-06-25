import MainLayout from "../components/layout/MainLayout";

import AlertSummary from "../components/alerts/AlertSummary";
import AlertFilters from "../components/alerts/AlertFilters";
import AlertTable from "../components/alerts/AlertTable";
import AlertTimeline from "../components/alerts/AlertTimeline";

function Alerts() {
    return (
        <MainLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-text-primary">
                    Network Alerts
                </h1>

                <p className="text-text-secondary mt-2">
                    Monitor and manage live network incidents.
                </p>

            </div>

            <AlertSummary />

            <AlertFilters />

            <AlertTable />

            <AlertTimeline />

        </MainLayout>
    );
}

export default Alerts;