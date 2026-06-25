import { Send } from "lucide-react";

function ChatInput() {
    return (
        <div className="flex gap-3 mt-6">
            <input
                type="text"
                placeholder="Ask NetSentinel AI..."
                className="flex-1 bg-bg-surface border border-accent-secondary rounded-xl px-5 py-4 text-text-primary outline-none focus:border-cyan-400"
            />

            <button className="px-6 bg-accent-primary rounded-xl text-black hover:bg-accent-hover transition">
                <Send size={20} />
            </button>
        </div>
    );
}

export default ChatInput;