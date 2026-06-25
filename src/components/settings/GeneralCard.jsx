import { Globe, Building2, Calendar, Languages, Monitor } from "lucide-react";

function GeneralCard() {
    return (
        <div className="bg-bg-surface/50 border border-accent-secondary rounded-2xl p-6">

            {/* Header */}

            <div className="mb-6">

                <h2 className="text-2xl font-semibold text-text-primary">

                    General Information

                </h2>

                <p className="text-text-secondary mt-1">

                    Basic system configuration

                </p>

            </div>

            {/* System Name */}

            <div className="space-y-5">

                <div>

                    <label className="flex items-center gap-2 text-text-hint mb-2">

                        <Monitor size={18} />

                        System Name

                    </label>

                    <input
                        type="text"
                        defaultValue="NetSentinel AI"
                        className="w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary outline-none focus:border-cyan-400"
                    />

                </div>

                {/* Organization */}

                <div>

                    <label className="flex items-center gap-2 text-text-hint mb-2">

                        <Building2 size={18} />

                        Organization

                    </label>

                    <input
                        type="text"
                        defaultValue="ISRO"
                        className="w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary outline-none focus:border-cyan-400"
                    />

                </div>

                {/* Timezone */}

                <div>

                    <label className="flex items-center gap-2 text-text-hint mb-2">

                        <Globe size={18} />

                        Timezone

                    </label>

                    <select
                        className="w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary outline-none focus:border-cyan-400"
                    >

                        <option>GMT +05:30 (India)</option>

                        <option>GMT +00:00 (UTC)</option>

                        <option>GMT -05:00 (EST)</option>

                    </select>

                </div>

                {/* Date Format */}

                <div>

                    <label className="flex items-center gap-2 text-text-hint mb-2">

                        <Calendar size={18} />

                        Date Format

                    </label>

                    <select
                        className="w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary outline-none focus:border-cyan-400"
                    >

                        <option>DD/MM/YYYY</option>

                        <option>MM/DD/YYYY</option>

                        <option>YYYY-MM-DD</option>

                    </select>

                </div>

                {/* Language */}

                <div>

                    <label className="flex items-center gap-2 text-text-hint mb-2">

                        <Languages size={18} />

                        Language

                    </label>

                    <select
                        className="w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary outline-none focus:border-cyan-400"
                    >

                        <option>English</option>

                        <option>Hindi</option>

                    </select>

                </div>

            </div>

            {/* Save Button */}

            <button
                className="
          mt-8
          w-full
          py-3
          rounded-xl
          bg-accent-primary
          hover:bg-accent-hover
          transition
          text-black
          font-semibold
        "
            >

                Save Changes

            </button>

        </div>
    );
}

export default GeneralCard;