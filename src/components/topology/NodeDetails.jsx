function NodeDetails() {

    return (

        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-6">

            <h2 className="text-text-primary text-2xl font-semibold">

                Selected Node

            </h2>

            <div className="mt-6 space-y-5">

                <div>

                    <p className="text-text-secondary">

                        Device

                    </p>

                    <p className="text-text-primary">

                        Router R-203

                    </p>

                </div>

                <div>

                    <p className="text-text-secondary">

                        Location

                    </p>

                    <p className="text-text-primary">

                        Delhi Hub

                    </p>

                </div>

                <div>

                    <p className="text-text-secondary">

                        CPU Usage

                    </p>

                    <p className="text-text-primary">

                        45%

                    </p>

                </div>

                <div>

                    <p className="text-text-secondary">

                        Memory

                    </p>

                    <p className="text-text-primary">

                        62%

                    </p>

                </div>

                <div>

                    <p className="text-text-secondary">

                        Status

                    </p>

                    <p className="text-green-400">

                        Healthy

                    </p>

                </div>

            </div>

        </div>

    )

}

export default NodeDetails;