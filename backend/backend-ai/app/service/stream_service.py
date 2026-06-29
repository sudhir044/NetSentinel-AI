from app.ollama.ollama_client import llm


class StreamService:

    async def stream(self, question: str):

        for chunk in llm.stream(question):
            yield chunk.content


stream_service = StreamService()