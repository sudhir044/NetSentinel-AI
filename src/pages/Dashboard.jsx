import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import AiinsightCard from "../components/dashboard/AiinsightCard";
import AlertTable from "../components/dashboard/AlertTable";
import MetricCard from "../components/dashboard/MetricCard";
import PredictionList from "../components/dashboard/PredictionList";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import TopologyGraph from "../components/dashboard/TopologyGraph";
import MainLayout from "../components/layout/MainLayout";

function Dashboard() {
    return (
        <MainLayout>

            <DashboardHeader />

            <div className="grid grid-cols-2 gap-6 mt-6">

                <MetricCard />

                <MetricCard />

                <MetricCard />

                <MetricCard />

            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">

                <PerformanceChart />

                <AiinsightCard />

            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">

                <TopologyGraph />

                <PredictionList />

            </div>

            <div className="mt-6">

                <AlertTable />

            </div>

        </MainLayout>

    );
}

export default Dashboard;
