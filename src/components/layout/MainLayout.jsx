import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
    return (
        <div className="flex h-screen text-white bg-gradient-to-b from-[#030712] via-[#071126] to-[#0B1120]">

            <Sidebar />


            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 overflow-y-auto p-6 relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full"></div>

                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full"></div>
                    <div classname=" relative z-10">  {children}</div>
                </main>

            </div>

        </div>
    );
}

export default MainLayout;