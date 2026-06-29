import api from "./api";

export const getPredictions = async () => {

    const response = await api.get(
        "/predictions"
    );

    return response.data;

};