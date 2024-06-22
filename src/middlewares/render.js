import { render } from "../../node_modules/lit-html/lit-html.js";

const root = document.getElementById('main-element');

const ctxRender = (template) => {
    render(template, root);
}

export const addRenderContext = (ctx, next) => {

    ctx.render = ctxRender;

    next();
}