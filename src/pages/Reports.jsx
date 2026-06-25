import MainLayout from "../components/layout/MainLayout";

import ReportsSummary from "../components/reports/ReportsSummary";
import PerformanceChart from "../components/reports/PerformanceChart";
import DeviceHealthChart from "../components/reports/DeviceHealthChart";
import ReportsTable from "../components/reports/ReportsTable";
import GenerateReport from "../components/reports/GenerateReport";

function Reports() {
    return (
        <MainLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-text-primary">

                    Reports & Analytics

                </h1>

                <p className="text-text-secondary mt-2">

                    Generate AI-powered network reports and analytics.

                </p>

            </div>

            <ReportsSummary />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

                <PerformanceChart />

                <DeviceHealthChart />

            </div>

            <ReportsTable />

            <GenerateReport />

        </MainLayout>
    );
}

export default Reports;