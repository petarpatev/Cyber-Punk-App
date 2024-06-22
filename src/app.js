import page from "../node_modules/page/page.mjs";

import { addRenderContext } from "./middlewares/render.js";

import { dashboardView } from "./views/dashboard.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { editView } from "./views/edit.js";
import { detailsView } from "./views/details.js";


page(addRenderContext);

page('/', homeView);
page('/dashboard', dashboardView);
page('/register', registerView);
page('/login', loginView);
page('/create', createView);
page('/edit/:itemId', editView);
page('/details/:itemId', detailsView);

page.start();