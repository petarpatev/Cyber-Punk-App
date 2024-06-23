import * as itemsService from "../api/items.js";

export const preload = async (ctx, next) => {
    const itemId = ctx.params.itemId;
    const item = await itemsService.getOne(itemId);
    ctx.item = item;

    next();
}