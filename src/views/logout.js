import * as auth from "../api/authentication.js";

export const onLogout = (ctx) => {
    auth.logout();
    ctx.page.redirect('/');
}