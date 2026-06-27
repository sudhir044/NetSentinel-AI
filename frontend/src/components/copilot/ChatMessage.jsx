function ChatMessage({ sender, message }) {
    const isAI = sender === "ai";

    return (
        <div className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}>
            <div
                className={`max-w-xl rounded-2xl px-5 py-4 ${isAI
                        ? "bg-bg-elevated text-text-primary"
                        : "bg-accent-primary text-black font-medium"
                    }`}
            >
                {message}
            </div>
        </div>
    );
}

export default ChatMessage;