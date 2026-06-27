from app.ollama.ollama_client import llm
from app.rag.retriever import retrieve_documents


class RagService:

    async def ask(self, question: str):

        docs = retrieve_documents(question)

        context = "\n".join(docs)

        prompt = f"""
You are NetSentinel AI.

Context:
{context}

Question:
{question}

Answer using only the context above.
"""

        response = llm.invoke(prompt)

        return {
            "success": True,
            "question": question,
            "context": docs,
            "answer": response.content
        }


rag_service = RagService()