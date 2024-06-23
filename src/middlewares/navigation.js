import { html, render } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
<a id="logo" href="/"><img id="logo" src="./images/logo.png" alt="img" /></a>
      <nav>
        <div>
          <a href="/dashboard">Market</a>
        </div>

        ${user
            ? html`<div class="user">
                        <a href="/create">Sell</a>
                        <a href="/logout">Logout</a>
                    </div>`
           : html`<div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                    </div>`
            }
      </nav>
      `

const header = document.getElementById('nav-wrapper');

export const onNavigate = (ctx, next) => {

    render(navTemplate(ctx.user), header);
    next();
}