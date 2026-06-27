import MainLayout from "../components/layout/MainLayout";

import PredictionSummary from "../components/predictions/PredictionSummary";
import PredictionCard from "../components/predictions/PredictionCard";
import PredictionTimeline from "../components/predictions/PredictionTimeline";
import RiskTable from "../components/predictions/RiskTable";

function Predictions() {
    return (
        <MainLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-text-primary">
                    AI Predictions
                </h1>

                <p className="text-text-secondary mt-2">
                    AI-powered network failure forecasting and risk analysis.
                </p>

            </div>

            <PredictionSummary />

            <PredictionCard />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

                <PredictionTimeline />

                <RiskTable />

            </div>

        </MainLayout>
    );
}

export default Predictions;