import DashboardHeader from "../components/dashboard/DashboardHeader"
import AiinsightCard from "../components/dashboard/AiinsightCard"
import AlertTable from "../components/dashboard/AlertTable"
import PerformanceChart from "../components/dashboard/PreformanceChart"
import PredictionList from "../components/dashboard/PredictionList"
import TopologyGraph from "../components/dashboard/TopologyGraph"


function Dashboard() {
    return (
        <>
            <div>
                <DashboardHeader />
            </div>
            <div>
                <AiinsightCard />
            </div>
            <div>
                <AlertTable />
            </div>
            <div>
                <PerformanceChart />
            </div>
            <div>
                <PredictionList />
            </div>
            <div>
                <TopologyGraph />
            </div>
        </>
    );
}

export default Dashboard;