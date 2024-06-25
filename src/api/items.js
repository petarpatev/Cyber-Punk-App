import * as api from "./requester.js";
import * as utils from "../utils.js";

const endpoints = {
    getAll: '/data/cyberpunk?sortBy=_createdOn%20desc',
    getOne: '/data/cyberpunk/',
    create: '/data/cyberpunk',
    edit: '/data/cyberpunk/',
    remove: '/data/cyberpunk/'
}

export const getAll = async () => {
    return await api.get(endpoints.getAll);
}

export const getOne = async (itemId) => {
    return await api.get(endpoints.getOne + itemId);
}

export const create = async (data) => {
    return await api.post(endpoints.create, data)
}

export const edit = async (itemId, data) => {
    return await api.put(endpoints.edit + itemId, data);
}

export const remove = async (itemId) => {
    return await api.del(endpoints.remove + itemId)
}