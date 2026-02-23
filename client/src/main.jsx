import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { WindowWidthProvider } from "./contexts/WindowWidthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <WindowWidthProvider>
      <App />
      </WindowWidthProvider>
    </BrowserRouter>
  </StrictMode>,
);
