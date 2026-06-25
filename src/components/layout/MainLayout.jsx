import Sidebar from "./Sidebar";

function MainLayout({ children }) {
    return (
        <div className="flex h-screen bg-bg-primary overflow-hidden">

            {/* Sidebar */}
            <Sidebar />

            {/* Right Side */}
            <div className="flex flex-col flex-1 overflow-hidden">

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto p-6 relative">
                    <div className="max-w-7xl mx-auto w-full h-full">
                        {children}
                    </div>
                </main>

            </div>

        </div>
    );
}

export default MainLayout;