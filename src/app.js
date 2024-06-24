import page from "../node_modules/page/page.mjs";

import { addRenderContext } from "./middlewares/render.js";
import { addSession } from "./middlewares/session.js";
import { onNavigate } from "./middlewares/navigation.js";
import { preload } from "./middlewares/preload.js";

import { dashboardView } from "./views/dashboard.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { editView } from "./views/edit.js";
import { detailsView } from "./views/details.js";
import { onLogout } from "./views/logout.js";

page(addSession);
page(onNavigate);
page(addRenderContext);

page('/', homeView);
page('/dashboard', dashboardView);
page('/register', registerView);
page('/login', loginView);
page('/logout', onLogout);
page('/create', createView);
page('/edit/:itemId', preload, editView);
page('/details/:itemId', preload, detailsView);

page.start();