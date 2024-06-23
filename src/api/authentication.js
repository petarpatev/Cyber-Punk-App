import * as api from "./requester.js";
import * as utils from "../utils.js";


const endpoints = {
    login: '/users/login',
}

export const login = async (email, password) => {
    const user = await api.post(endpoints.login, { email, password });
    utils.setUserData(user);
    return user;
}

