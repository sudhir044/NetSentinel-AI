function PredictionTimeline() {
    return (
        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-6">

            <h2 className="text-2xl text-text-primary font-semibold">

                Prediction Timeline

            </h2>

            <div className="mt-8 space-y-6">

                <TimelineItem
                    time="Now"
                    title="Packet loss detected"
                />

                <TimelineItem
                    time="30 min"
                    title="CPU usage increases"
                />

                <TimelineItem
                    time="2 Hours"
                    title="Possible Router Failure"
                />

            </div>

        </div>
    );
}

function TimelineItem({ time, title }) {
    return (
        <div className="flex gap-4">

            <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></div>

            <div>

                <p className="text-accent-primary">

                    {time}

                </p>

                <p className="text-text-primary">

                    {title}

                </p>

            </div>

        </div>
    );
}

export default PredictionTimeline;