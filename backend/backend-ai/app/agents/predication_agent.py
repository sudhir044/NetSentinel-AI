from app.ollama.ollama_client import llm


class PredictionAgent:

    async def execute(self, sensor):

        prompt = f"""
Predict possible failure.

Sensor Data

{sensor}
"""

        response = llm.invoke(prompt)

        return response.content


prediction_agent = PredictionAgent()