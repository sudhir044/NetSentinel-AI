import { Palette, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";

function AppearanceCard() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="bg-bg-surface border border-accent-secondary rounded-2xl p-6">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-text-primary">
                    Appearance
                </h2>
                <p className="text-text-secondary mt-1">
                    Customize the look and feel.
                </p>
            </div>

            {/* Theme */}
            <div className="mb-6">
                <label className="text-text-hint font-medium">
                    Theme
                </label>
                <div className="grid grid-cols-3 gap-3 mt-3">
                    <button 
                        onClick={() => setTheme('dark')}
                        className={`border rounded-xl p-4 transition ${theme === 'dark' ? 'border-accent-primary bg-bg-elevated' : 'border-accent-secondary hover:border-accent-primary'}`}
                    >
                        <Moon className={`mx-auto ${theme === 'dark' ? 'text-accent-primary' : 'text-text-primary'}`} />
                        <p className="text-text-primary mt-2">Dark</p>
                    </button>

                    <button 
                        onClick={() => setTheme('light')}
                        className={`border rounded-xl p-4 transition ${theme === 'light' ? 'border-accent-primary bg-bg-elevated' : 'border-accent-secondary hover:border-accent-primary'}`}
                    >
                        <Sun className={`mx-auto ${theme === 'light' ? 'text-yellow-500' : 'text-text-primary'}`} />
                        <p className="text-text-primary mt-2">Light</p>
                    </button>

                    <button 
                        onClick={() => setTheme('system')}
                        className={`border rounded-xl p-4 transition ${theme === 'system' ? 'border-accent-primary bg-bg-elevated' : 'border-accent-secondary hover:border-accent-primary'}`}
                    >
                        <Monitor className={`mx-auto ${theme === 'system' ? 'text-accent-primary' : 'text-text-hint'}`} />
                        <p className="text-text-primary mt-2">System</p>
                    </button>
                </div>
            </div>

            {/* Accent Color */}
            <div className="mb-6">
                <label className="flex items-center gap-2 text-text-hint font-medium mb-3">
                    <Palette size={18} />
                    Accent Color
                </label>
                <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-accent-primary ring-2 ring-white/50 dark:ring-white"></button>
                    <button className="w-10 h-10 rounded-full bg-purple-500"></button>
                    <button className="w-10 h-10 rounded-full bg-green-500"></button>
                    <button className="w-10 h-10 rounded-full bg-orange-500"></button>
                    <button className="w-10 h-10 rounded-full bg-red-500"></button>
                </div>
            </div>

            {/* Sidebar Style */}
            <div className="mb-6">
                <label className="text-text-hint font-medium">
                    Sidebar Style
                </label>
                <select
                    className="mt-3 w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary outline-none focus:border-cyan-400"
                >
                    <option>Expanded</option>
                    <option>Compact</option>
                    <option>Icon Only</option>
                </select>
            </div>

            {/* Font Size */}
            <div className="mb-8">
                <label className="text-text-hint font-medium">
                    Font Size
                </label>
                <input
                    type="range"
                    min="12"
                    max="20"
                    defaultValue="16"
                    className="w-full mt-4 accent-cyan-500"
                />
            </div>

            {/* Save Button */}
            <button
                className="w-full bg-accent-primary hover:bg-accent-hover transition rounded-xl py-3 text-text-primary font-semibold"
            >
                Save Appearance
            </button>
        </div>
    );
}

export default AppearanceCard;