import {
    Download,
    FileSpreadsheet,
    Mail
} from "lucide-react";

function GenerateReport() {

    return (

        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-6 mt-8">

            <h2 className="text-2xl text-text-primary font-semibold">

                Generate Report

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

                <button className="bg-cyan-500 hover:bg-cyan-400 rounded-xl py-4 flex justify-center items-center gap-2 text-black font-semibold">

                    <Download />

                    Export PDF

                </button>

                <button className="bg-green-500 hover:bg-green-400 rounded-xl py-4 flex justify-center items-center gap-2 text-black font-semibold">

                    <FileSpreadsheet />

                    Export CSV

                </button>

                <button className="bg-purple-500 hover:bg-purple-400 rounded-xl py-4 flex justify-center items-center gap-2 text-black font-semibold">

                    <Mail />

                    Email Report

                </button>

            </div>

        </div>

    )

}

export default GenerateReport;