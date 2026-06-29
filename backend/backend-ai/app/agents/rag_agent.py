from app.rag.rag_pipeline import rag_pipeline


class RagAgent:

    async def execute(self, question):

        return await rag_pipeline.query(question)


rag_agent = RagAgent()