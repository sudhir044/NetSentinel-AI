import api from "./api";

export const login = async (email, password) => {

    const response = await api.post("/v1/auth/login", {

        email,

        password,

    });

    return response.data;

};

export const register = async (userData) => {

    const response = await api.post(

        "/v1/auth/register",

        userData

    );

    return response.data;

};

export const getProfile = async () => {

    const response = await api.get(

        "/v1/auth/profile"

    );

    return response.data;

};