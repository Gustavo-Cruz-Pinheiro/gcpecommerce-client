import React from "react";
import { createRoot } from "react-dom/client";

import Rotas from "./routes/routes"
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Rotas />
);

serviceWorker.unregister();
