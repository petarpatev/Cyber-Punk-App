import * as api from "./requester.js";
import * as utils from "../utils.js";

const endpoints = {
    getAll: '/data/cyberpunk?sortBy=_createdOn%20desc',
}

export const getAll = async () => {
    return await api.get(endpoints.getAll);
}