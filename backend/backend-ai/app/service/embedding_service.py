from sentence_transformers import SentenceTransformer

from app.config.settings import settings

embedding_model = SentenceTransformer(
    settings.EMBEDDING_MODEL
)


def get_embedding(text: str):

    return embedding_model.encode(text).tolist()