import { html } from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = () => html`
    <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src="./images/drone.png" alt="example1" />
              <p id="details-title">Drone</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €1200</p>
                <p class="details-availability">
                  Mass-Market Retail, Online Marketplace
                </p>
                <p class="type">Type: Advanced Surveillance</p>
                <p id="item-description">
                  The Sky Seeker is an invaluable tool for exploration and
                  surveillance. Its compact size and maneuverability make it
                  ideal for navigating tight spaces and gathering data, while
                  its high-resolution cameras provide clear images even in
                  low-light conditions. With the Sky Seeker, you can stay ahead
                  of the curve in the ever-changing world of cyberpunk.
                </p>
              </div>
              <!--Edit and Delete are only for creator-->
              <div id="action-buttons">
                <a href="" id="edit-btn">Edit</a>
                <a href="" id="delete-btn">Delete</a>
              </div>
            </div>
          </div>
        </section>
    `

export const detailsView = (ctx) => {
    ctx.render(detailsTemplate());
}