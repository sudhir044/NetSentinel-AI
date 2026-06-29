from app.ollama.ollama_client import llm


class ChatService:

    async def chat(self, message: str):

        response = llm.invoke(message)

        return response.content


chat_service = ChatService()