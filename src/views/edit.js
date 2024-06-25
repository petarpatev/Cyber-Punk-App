import { html } from "../../node_modules/lit-html/lit-html.js";
import * as itemsService from "../api/items.js";
import * as utils from "../utils.js";

const editTemplate = (item, onSubmit) => html`
            <section id="edit">
          <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input type="text" name="item" id="item" placeholder="Item" .value=${item.item}/>
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
                .value=${item.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                .value=${item.price}
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
                .value=${item.availability}
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
                .value=${item.type}
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
                .value=${item.description}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
    `

const onSubmit = async (ctx, formData, event) => {
  if (utils.isValid(formData)) {
    await itemsService.edit(ctx.item._id, formData);
    event.target.reset();
    ctx.page.redirect(`/details/${ctx.item._id}`);
  } else {
    utils.enableErrorBox("All fields are required!");
  }
}

export const editView = (ctx) => {
  ctx.render(editTemplate(ctx.item, utils.submitWrapper(ctx, onSubmit)));
}