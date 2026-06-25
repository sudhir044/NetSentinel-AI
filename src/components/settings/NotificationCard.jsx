import { Bell, Mail, Smartphone, ShieldAlert, Save } from "lucide-react";

function NotificationCard() {
    return (
        <div className="bg-bg-surface/50 border border-accent-secondary rounded-2xl p-6">

            {/* Header */}

            <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-xl bg-bg-elevated flex items-center justify-center">

                    <Bell className="text-accent-primary" />

                </div>

                <div>

                    <h2 className="text-2xl font-semibold text-text-primary">
                        Notifications
                    </h2>

                    <p className="text-text-secondary text-sm">
                        Configure alerts and notifications
                    </p>

                </div>

            </div>

            {/* Notification Items */}

            <div className="space-y-5">

                <NotificationItem
                    icon={<Mail size={18} />}
                    title="Email Notifications"
                    desc="Receive email alerts."
                />

                <NotificationItem
                    icon={<Smartphone size={18} />}
                    title="Push Notifications"
                    desc="Send alerts to your device."
                />

                <NotificationItem
                    icon={<ShieldAlert size={18} />}
                    title="Critical Alerts"
                    desc="Always notify critical incidents."
                />

                <NotificationItem
                    icon={<Bell size={18} />}
                    title="Daily Summary"
                    desc="Daily network health report."
                />

            </div>

            <button className="mt-8 w-full bg-accent-primary hover:bg-accent-hover transition rounded-xl py-3 flex items-center justify-center gap-2 text-black font-semibold">

                <Save size={18} />

                Save Notification Settings

            </button>

        </div>
    );
}

function NotificationItem({ icon, title, desc }) {
    return (
        <div className="flex items-center justify-between bg-bg-elevated rounded-xl p-4">

            <div className="flex gap-3">

                <div className="text-accent-primary">

                    {icon}

                </div>

                <div>

                    <h3 className="text-text-primary">

                        {title}

                    </h3>

                    <p className="text-text-secondary text-sm">

                        {desc}

                    </p>

                </div>

            </div>

            {/* Toggle */}

            <label className="relative inline-flex items-center cursor-pointer">

                <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                />

                <div className="w-11 h-6 bg-bg-elevated rounded-full peer peer-checked:bg-accent-primary transition"></div>

                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>

            </label>

        </div>
    );
}

export default NotificationCard;