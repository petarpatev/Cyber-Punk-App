import * as api from "./requester.js";
import * as utils from "../utils.js";


const endpoints = {
    login: '/users/login',
    register: '/users/register',
}

export const login = async (email, password) => {
    const user = await api.post(endpoints.login, { email, password });
    utils.setUserData(user);
    return user;
}

export const register = async (email, password) => {
    const user = await api.post(endpoints.register, { email, password });
    utils.setUserData(user);
    return user;
}