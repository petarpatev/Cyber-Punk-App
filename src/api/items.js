import * as api from "./requester.js";
import * as utils from "../utils.js";

const endpoints = {
    getAll: '/data/cyberpunk?sortBy=_createdOn%20desc',
    create: '/data/cyberpunk',
}

export const getAll = async () => {
    return await api.get(endpoints.getAll);
}

export const create = async (data) => {
    return await api.post(endpoints.create, data)
}