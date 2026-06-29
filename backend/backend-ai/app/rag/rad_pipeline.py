from app.services.embedding_service import get_embedding
from app.vectordb.chroma_client import collection
from app.ollama.ollama_client import llm


class RAGPipeline:

    async def query(self, question: str):

        # Generate embedding for user question
        embedding = get_embedding(question)

        # Search ChromaDB
        results = collection.query(
            query_embeddings=[embedding],
            n_results=5
        )

        documents = []

        if results["documents"]:
            documents = results["documents"][0]

        context = "\n\n".join(documents)

        prompt = f"""
You are NetSentinel AI.

Use ONLY the information provided below.

Context:
{context}

Question:
{question}

If the answer is not available in the context, reply:
"I couldn't find relevant information in the uploaded documents."
"""

        response = llm.invoke(prompt)

        return {
            "question": question,
            "answer": response.content,
            "sources": documents
        }


rag_pipeline = RAGPipeline()