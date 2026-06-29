import React, { useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import { BrainCircuit } from "lucide-react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MetricCard from "../components/dashboard/MetricCard";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import TopologyGraph from "../components/dashboard/TopologyGraph";
import PredictionList from "../components/dashboard/PredictionList";
import AIInsightCard from "../components/dashboard/AIInsightCard";
import AlertTable from "../components/dashboard/AlertTable";
import { getDashboard } from "../services/dashboardService";

function Dashboard() {
    const [dashboard, setDashboard] = useState({
        metrics: [],
        alerts: [],
        predictions: [],
        performance: [],
        topology: {
            nodes: [],
            links: [],
        },
        insight: null,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadDashboard = async () => {
            try {
                const data = await getDashboard();
                setDashboard(prev => ({ ...prev, ...data }));
            } catch (err) {
                console.error("Dashboard Error:", err);
                setError("Failed to load dashboard data");
            } finally {
                setLoading(false);
            }
        };

        loadDashboard();
    }, []);

    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen">
                    <h2 className="text-white text-2xl">
                        Loading Dashboard...
                    </h2>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="flex flex-col gap-6 pb-6">
                {/* Top Row */}
                <div className="flex-shrink-0">
                    <DashboardHeader />
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mt-4">
                        {dashboard.metrics && dashboard.metrics.map((metric, index) => (
                            <MetricCard
                                key={index}
                                metric={metric}
                            />
                        ))}

                        {/* AI Prediction Button */}
                        <button className="group relative rounded-xl border border-accent-secondary bg-gradient-to-br bg-bg-surface backdrop-blur-sm p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/20 hover:border-accent-primary overflow-hidden flex flex-col items-center justify-center min-h-[110px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <BrainCircuit className="text-accent-primary mb-2 group-hover:scale-110 transition-transform duration-300" size={32} />
                            <span className="text-cyan-50 font-bold tracking-wide">Generate AI Prediction</span>
                        </button>
                    </div>
                </div>

                {/* Middle Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[450px]">
                    <div className="lg:col-span-2 h-full">
                        <PerformanceChart
                            data={dashboard.performance}
                        />
                    </div>
                    <div className="h-full">
                        <TopologyGraph
                            nodes={dashboard.topology?.nodes || []}
                            links={dashboard.topology?.links || []}
                        />
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[450px]">
                    <div className="lg:col-span-2 h-full">
                        <AlertTable
                            alerts={dashboard.alerts}
                        />
                    </div>
                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex-1 h-full">
                            <PredictionList
                                predictions={dashboard.predictions}
                            />
                        </div>
                        <div className="flex-shrink-0">
                            <AIInsightCard
                                insight={dashboard.insight}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Dashboard;