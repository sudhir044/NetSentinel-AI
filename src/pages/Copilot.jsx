import MainLayout from "../components/layout/MainLayout";
import ChatInput from "../components/copilot/ChatInput";
import ChatMessage from "../components/copilot/ChatMessage";
import SuggestedPrompt from "../components/copilot/SuggestedPrompt";
import { chatHistory } from "../data/chatHistory";
import { Bot } from "lucide-react";

function Copilot() {
    return (
        <MainLayout>
            <div className="h-full flex flex-col">

                {/* Header */}

                <div className="flex items-center gap-4 mb-8">

                    <div className="w-14 h-14 rounded-2xl bg-bg-elevated flex items-center justify-center">

                        <Bot className="text-accent-primary" size={28} />

                    </div>

                    <div>

                        <h1 className="text-4xl font-bold text-text-primary">

                            AI Copilot

                        </h1>

                        <p className="text-text-secondary">

                            Your intelligent network assistant.

                        </p>

                    </div>

                </div>

                {/* Suggested Prompts */}

                <SuggestedPrompt />

                {/* Chat */}

                <div className="mt-8 bg-bg-surface/40 border border-accent-secondary rounded-2xl p-6 h-[500px] overflow-y-auto">

                    {chatHistory.map((chat) => (
                        <ChatMessage
                            key={chat.id}
                            sender={chat.sender}
                            message={chat.message}
                        />
                    ))}

                </div>

                {/* Input */}

                <ChatInput />

            </div>
        </MainLayout>
    );
}

export default Copilot;