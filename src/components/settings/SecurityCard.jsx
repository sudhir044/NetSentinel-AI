import {
    Shield,
    Lock,
    KeyRound,
    Clock3,
    HardDrive,
    Save,
} from "lucide-react";

function SecurityCard() {
    return (
        <div className="bg-bg-surface/50 border border-accent-secondary rounded-2xl p-6">

            {/* Header */}

            <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-xl bg-bg-elevated flex items-center justify-center">

                    <Shield className="text-accent-primary" size={24} />

                </div>

                <div>

                    <h2 className="text-2xl font-semibold text-text-primary">

                        Security

                    </h2>

                    <p className="text-text-secondary text-sm">

                        Protect your AI platform

                    </p>

                </div>

            </div>

            {/* Two Factor */}

            <div className="flex items-center justify-between bg-bg-elevated rounded-xl p-4 mb-4">

                <div className="flex items-center gap-3">

                    <Lock className="text-accent-primary" size={20} />

                    <div>

                        <h3 className="text-text-primary">

                            Two-Factor Authentication

                        </h3>

                        <p className="text-text-secondary text-sm">

                            Add extra account security

                        </p>

                    </div>

                </div>

                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 accent-cyan-500"
                />

            </div>

            {/* API Key */}

            <div className="mb-5">

                <label className="flex items-center gap-2 text-text-hint mb-2">

                    <KeyRound size={18} />

                    API Key

                </label>

                <input
                    type="password"
                    defaultValue="sk_live_xxxxxxxxxxxxxxxxx"
                    className="w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary"
                />

            </div>

            {/* Session */}

            <div className="mb-5">

                <label className="flex items-center gap-2 text-text-hint mb-2">

                    <Clock3 size={18} />

                    Session Timeout

                </label>

                <select className="w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary">

                    <option>15 Minutes</option>

                    <option>30 Minutes</option>

                    <option>1 Hour</option>

                    <option>Never</option>

                </select>

            </div>

            {/* Encryption */}

            <div className="bg-bg-elevated rounded-xl p-4 mb-5">

                <div className="flex justify-between">

                    <span className="text-text-hint">

                        Encryption

                    </span>

                    <span className="text-green-400 font-semibold">

                        AES-256 Enabled

                    </span>

                </div>

            </div>

            {/* Backup */}

            <button className="w-full border border-accent-secondary hover:border-accent-secondary rounded-xl py-3 flex justify-center items-center gap-2 text-text-primary transition mb-4">

                <HardDrive size={18} />

                Backup Configuration

            </button>

            {/* Save */}

            <button className="w-full bg-accent-primary hover:bg-accent-hover transition rounded-xl py-3 flex items-center justify-center gap-2 text-black font-semibold">

                <Save size={18} />

                Save Security Settings

            </button>

        </div>
    );
}

export default SecurityCard;