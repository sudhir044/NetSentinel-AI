import Navbar from "../layout/Navbar";
import Hero from "../../pages/Hero";
import DashboardPreview from "./DashboardPreview";
import Features from "./Features";
import Team from "./Team";
import Footer from "./Footer";

function Home() {
    return (
        <div className="min-h-screen bg-bg-primary selection:bg-accent-primary/30">
            <Navbar />
            <Hero />
            <DashboardPreview />
            <Features />
            <Team />
            <Footer />
        </div>
    );
}

export default Home;

