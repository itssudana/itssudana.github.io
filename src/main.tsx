// main.tsx
if (import.meta.env.PROD) {
  // Matikan log spam
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};

  // ✅ Tetap tampilkan credit dengan blok biru
  setTimeout(() => {
    console.log(
      "%c Designed and Coded by Natha ",
      "background: #1e40af; color: white; padding: 6px 12px; border-radius: 4px; font-weight: bold;"
    );
  }, 0);
}


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/700.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
