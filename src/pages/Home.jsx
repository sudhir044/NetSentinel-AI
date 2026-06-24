import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Architecture from "../components/landing/Architecture";
import DashboardPreview from "../components/landing/DashboardPreview";
import Team from "../components/landing/Team";
import Footer from "../components/landing/Footer";

function Home() {
    return (
        <>

            <Navbar />



            <Hero />

            <DashboardPreview />

            <Architecture />


            <Features />

            <Team />

            <Footer />



        </>
    );
}

export default Home;