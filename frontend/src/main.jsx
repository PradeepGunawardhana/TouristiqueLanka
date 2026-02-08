import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init.tsx";
import App from "./App.jsx";
import "./index.css";
import "flowbite/dist/flowbite.css";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeInit />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

initThemeMode();
