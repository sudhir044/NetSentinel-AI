const activity = [

    {

        from: "Delhi",

        to: "Mumbai",

        latency: "18 ms",

        status: "Healthy"

    },

    {

        from: "Delhi",

        to: "Kolkata",

        latency: "42 ms",

        status: "Congested"

    },

    {

        from: "Bengaluru",

        to: "Chennai",

        latency: "15 ms",

        status: "Healthy"

    }

]

function LinkActivity() {

    return (

        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-6">

            <h2 className="text-text-primary text-2xl font-semibold">

                Recent Link Activity

            </h2>

            <div className="mt-6 space-y-4">

                {

                    activity.map((item, index) => (

                        <div

                            key={index}

                            className="flex justify-between border-b border-accent-secondary pb-3"

                        >

                            <div>

                                <p className="text-text-primary">

                                    {item.from} → {item.to}

                                </p>

                                <p className="text-text-secondary">

                                    {item.latency}

                                </p>

                            </div>

                            <span

                                className={

                                    item.status === "Healthy"

                                        ?

                                        "text-green-400"

                                        :

                                        "text-yellow-400"

                                }

                            >

                                {item.status}

                            </span>

                        </div>

                    ))

                }

            </div>

        </div>

    )

}

export default LinkActivity;