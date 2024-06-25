import { html } from "../../node_modules/lit-html/lit-html.js";
import * as utils from "../utils.js";
import * as auth from "../api/authentication.js";

const loginTemplate = (onSubmit) => html`
    <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onSubmit} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
    `

const onSubmit = async (ctx, formData, event) => {
  if (utils.isValid(formData)) {
    await auth.login(formData.email, formData.password);
    event.target.reset();
    ctx.page.redirect('/');
  } else {
    utils.enableErrorBox("All fields are required!");
  }
}

export const loginView = (ctx) => {
  ctx.render(loginTemplate(utils.submitWrapper(ctx, onSubmit)));
}