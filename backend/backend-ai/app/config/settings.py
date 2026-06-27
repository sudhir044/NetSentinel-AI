from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    APP_NAME: str = "NetSentinel AI"

    APP_VERSION: str = "1.0.0"

    OLLAMA_BASE_URL: str

    OLLAMA_MODEL: str

    CHROMA_DB: str

    EMBEDDING_MODEL: str

    UPLOAD_FOLDER: str

    class Config:
        env_file = ".env"


settings = Settings()