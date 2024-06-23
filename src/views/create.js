import { html } from "../../node_modules/lit-html/lit-html.js";
import * as itemsService from "../api/items.js";
import * as utils from "../utils.js";

const createTemplate = (onSubmit) => html`
    <section id="create">
          <div class="form form-item">
            <h2>Share Your item</h2>
            <form @submit=${onSubmit} class="create-form">
              <input type="text" name="item" id="item" placeholder="Item" />
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
    `

const onSubmit = async (ctx, formData, event) => {

  if (utils.isValid(formData)) {
    await itemsService.create(formData);
    event.target.reset();
    ctx.page.redirect('/dashboard');
  } else {
    alert('All fields are required');
  }

}

export const createView = (ctx) => {
  ctx.render(createTemplate(utils.submitWrapper(ctx, onSubmit)));
}