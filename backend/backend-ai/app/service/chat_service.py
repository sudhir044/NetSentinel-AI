from app.ollama.ollama_client import llm


class ChatService:

    async def generate_response(self, message: str):

        response = llm.invoke(message)

        return {
            "success": True,
            "response": response.content
        }


chat_service = ChatService()