import { html } from "../../node_modules/lit-html/lit-html.js";
import * as utils from "../utils.js";
import * as auth from "../api/authentication.js";

const registerTemplate = (onSubmit) => html`
    <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
    `

const onSubmit = async (ctx, formData, event) => {
  if (utils.isValid(formData) && formData['re-password'] == formData.password) {
    await auth.register(formData.email, formData.password);
    event.target.reset();
    ctx.page.redirect('/');
  } else if (formData['re-password'] != formData.password) {
    utils.enableErrorBox("Passwords don\'t match!");
  } else {
    utils.enableErrorBox("All fields are required!");
  }
}

export const registerView = (ctx) => {
  ctx.render(registerTemplate(utils.submitWrapper(ctx, onSubmit)));
}