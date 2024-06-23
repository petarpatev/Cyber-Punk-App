import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = (item, isCreator) => html`
    <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src=${item.imageUrl} alt="example1" />
              <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${item.price}</p>
                <p class="details-availability">
                  ${item.availability}
                </p>
                <p class="type">Type: ${item.type}</p>
                <p id="item-description">
                  ${item.description}
                </p>
              </div>
              ${isCreator
                ? html`
                    <div id="action-buttons">
                      <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                      <a href="javascript:void(0)" id="delete-btn">Delete</a>
                    </div>`
                : nothing
              }
            </div>
          </div>
        </section>
    `

export const detailsView = (ctx) => {
    const isCreator = ctx.item._ownerId == ctx.user._id;
    ctx.render(detailsTemplate(ctx.item, isCreator));
}