import {
    BrainCircuit,
    Cpu,
    Database,
    Server,
    Zap,
    Save,
} from "lucide-react";

function AIConfigCard() {
    return (
        <div className="bg-bg-surface/50 border border-accent-secondary rounded-2xl p-6">

            {/* Header */}

            <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-xl bg-bg-elevated flex items-center justify-center">

                    <BrainCircuit className="text-accent-primary" />

                </div>

                <div>

                    <h2 className="text-2xl font-semibold text-text-primary">
                        AI Configuration
                    </h2>

                    <p className="text-text-secondary text-sm">
                        Configure Ollama and AI models
                    </p>

                </div>

            </div>

            {/* AI Model */}

            <div className="mb-5">

                <label className="text-text-hint font-medium">
                    AI Model
                </label>

                <select className="mt-2 w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary">

                    <option>llama3.1:8b</option>
                    <option>phi3:mini</option>
                    <option>mistral:7b</option>
                    <option>deepseek-r1</option>

                </select>

            </div>

            {/* Ollama Status */}

            <div className="mb-5">

                <label className="text-text-hint font-medium flex items-center gap-2">

                    <Server size={18} />

                    Ollama Status

                </label>

                <div className="mt-2 flex items-center justify-between bg-bg-elevated rounded-xl px-4 py-3">

                    <span className="text-text-primary">

                        Running

                    </span>

                    <span className="flex items-center gap-2 text-green-400">

                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

                        Connected

                    </span>

                </div>

            </div>

            {/* Temperature */}

            <div className="mb-5">

                <label className="text-text-hint">

                    Temperature

                </label>

                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue="0.2"
                    className="w-full mt-3 accent-cyan-500"
                />

            </div>

            {/* Max Tokens */}

            <div className="mb-5">

                <label className="text-text-hint">

                    Max Tokens

                </label>

                <input
                    type="number"
                    defaultValue="2048"
                    className="mt-2 w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary"
                />

            </div>

            {/* Context Window */}

            <div className="mb-5">

                <label className="text-text-hint">

                    Context Window

                </label>

                <select className="mt-2 w-full bg-bg-elevated border border-accent-secondary rounded-xl px-4 py-3 text-text-primary">

                    <option>4096</option>

                    <option>8192</option>

                    <option>16384</option>

                </select>

            </div>

            {/* Toggles */}

            <div className="space-y-4 mt-6">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <Database size={18} className="text-accent-primary" />

                        <span className="text-text-primary">

                            Enable RAG

                        </span>

                    </div>

                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-cyan-500"
                    />

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <Zap size={18} className="text-accent-primary" />

                        <span className="text-text-primary">

                            Streaming Response

                        </span>

                    </div>

                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-cyan-500"
                    />

                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <Cpu size={18} className="text-accent-primary" />

                        <span className="text-text-primary">

                            GPU Acceleration

                        </span>

                    </div>

                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-cyan-500"
                    />

                </div>

            </div>

            {/* Save */}

            <button className="mt-8 w-full flex items-center justify-center gap-2 bg-accent-primary hover:bg-accent-hover transition rounded-xl py-3 text-black font-semibold">

                <Save size={18} />

                Save AI Settings

            </button>

        </div>
    );
}

export default AIConfigCard;