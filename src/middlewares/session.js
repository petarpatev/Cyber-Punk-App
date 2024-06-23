import * as utils from "../utils.js";

export const addSession = (ctx, next) => {

    const user = utils.getUserData();
    if(user) {
        ctx.user = user;
    }
    next();
}