function AlertTimeline() {

    const events = [
        "12:35 PM - Router R-203 reported high latency",
        "12:45 PM - Packet loss exceeded threshold",
        "12:48 PM - Switch SW-105 warning generated",
        "01:15 PM - Firewall issue resolved"
    ];

    return (

        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-6 mt-8">

            <h2 className="text-2xl font-semibold text-text-primary">

                Recent Activity

            </h2>

            <div className="mt-6 space-y-5">

                {events.map((event, index) => (

                    <div
                        key={index}
                        className="flex gap-4"
                    >

                        <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></div>

                        <p className="text-slate-300">

                            {event}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default AlertTimeline;