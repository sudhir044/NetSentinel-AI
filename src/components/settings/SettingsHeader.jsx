import { Settings } from "lucide-react";

function SettingsHeader() {
    return (
        <div className="mb-8">

            <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-bg-elevated flex items-center justify-center">

                    <Settings
                        size={28}
                        className="text-accent-primary"
                    />

                </div>

                <div>

                    <h1 className="text-4xl font-bold text-text-primary">

                        Settings

                    </h1>

                    <p className="text-text-secondary mt-1">

                        Manage your system preferences and AI configuration.

                    </p>

                </div>

            </div>

        </div>
    );
}

export default SettingsHeader;