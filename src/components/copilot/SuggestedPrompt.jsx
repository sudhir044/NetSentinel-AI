const prompts = [
    "Show unhealthy devices",
    "Explain Router R-203",
    "Predict next outage",
    "Summarize today's alerts",
];

function SuggestedPrompt() {
    return (
        <div className="flex flex-wrap gap-3 mt-4">
            {prompts.map((prompt, index) => (
                <button
                    key={index}
                    className="px-4 py-2 rounded-full border border-accent-secondary bg-bg-surface text-text-hint hover:border-accent-primary hover:text-accent-primary transition"
                >
                    {prompt}
                </button>
            ))}
        </div>
    );
}

export default SuggestedPrompt;