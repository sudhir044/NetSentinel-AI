import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MainLayout from "../components/layout/MainLayout";

import SettingsHeader from "../components/settings/SettingsHeader";
import SettingsTabs from "../components/settings/SettingsTabs";

import GeneralCard from "../components/settings/GeneralCard";
import AppearanceCard from "../components/settings/AppearanceCard";
import AIConfigCard from "../components/settings/AIConfigCard";
import NotificationCard from "../components/settings/NotificationCard";
import IntegrationCard from "../components/settings/IntegrationCard";
import SecurityCard from "../components/settings/SecurityCard";

function Settings() {
    const [activeTab, setActiveTab] = useState("General");

    return (
        <MainLayout>

            <SettingsHeader />

            <SettingsTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <div className="mt-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === "General" && <GeneralCard />}
                        {activeTab === "Appearance" && <AppearanceCard />}
                        {activeTab === "AI" && <AIConfigCard />}
                        {activeTab === "Notifications" && <NotificationCard />}
                        {activeTab === "Integrations" && <IntegrationCard />}
                        {activeTab === "Security" && <SecurityCard />}
                    </motion.div>
                </AnimatePresence>
            </div>

        </MainLayout>
    );
}

export default Settings;