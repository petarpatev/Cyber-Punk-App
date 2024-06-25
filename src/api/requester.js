import * as utils from "../utils.js";

const host = "http://localhost:3030";

const request = async (method, url, data) => {

    let options = {
        method,
        headers: {}
    }

    const token = utils.getUserToken();
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json',
        options.body = JSON.stringify(data);
    }

    try {

        const response = await fetch(host + url, options);
        if (response.ok != true) {
            if (response.status == 403) {
                utils.clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {

        utils.enableErrorBox(err.message);
        throw err;

    }

}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');