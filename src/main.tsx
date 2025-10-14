import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/700.css";

import { setupProductionConsole } from "./utils/consoleUtils";

setupProductionConsole();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
