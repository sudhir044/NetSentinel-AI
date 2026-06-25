const reports = [

    {
        name: "Weekly Report",
        date: "24 Jun 2026",
        status: "Generated"
    },

    {
        name: "AI Prediction Report",
        date: "23 Jun 2026",
        status: "Generated"
    },

    {
        name: "Network Health Report",
        date: "22 Jun 2026",
        status: "Pending"
    }

]

function ReportsTable() {

    return (

        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-6 mt-8">

            <h2 className="text-2xl text-text-primary font-semibold">

                Recent Reports

            </h2>

            <table className="w-full mt-6">

                <thead>

                    <tr className="text-text-secondary border-b border-accent-secondary">

                        <th className="text-left py-3">

                            Report

                        </th>

                        <th className="text-left">

                            Date

                        </th>

                        <th className="text-left">

                            Status

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        reports.map((item) => (

                            <tr
                                key={item.name}
                                className="border-b border-accent-secondary"
                            >

                                <td className="py-4 text-text-primary">

                                    {item.name}

                                </td>

                                <td className="text-text-secondary">

                                    {item.date}

                                </td>

                                <td className="text-green-400">

                                    {item.status}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    )

}

export default ReportsTable;