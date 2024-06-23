import { html } from "../../node_modules/lit-html/lit-html.js";
import * as itemsService from "../api/items.js";

const dashboardTemplate = (items) => html`
    <h3 class="heading">Market</h3>
        <section id="dashboard">
          ${items.length > 0
    ? items.map(itemTemplate)
    : html`<h3 class="empty">No Items Yet</h3>`
  }
        </section>
        
    `

const itemTemplate = (item) => html`
<div class="item">
            <img src=${item.imageUrl} alt="example1" />
            <h3 class="model">${item.item}</h3>
            <div class="item-info">
              <p class="price">Price: €${item.price}</p>
              <p class="availability">${item.availability}</p>
              <p class="type">Type: ${item.type}</p>
            </div>
            <a class="details-btn" href="/details/${item._id}">Uncover More</a>
          </div>
`

export const dashboardView = async (ctx) => {

  const items = await itemsService.getAll();
  ctx.render(dashboardTemplate(items));

}