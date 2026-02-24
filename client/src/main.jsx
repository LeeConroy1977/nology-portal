import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { WindowWidthProvider } from "./contexts/WindowWidthContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import { NewUserProvider } from "./contexts/NewUserContext.jsx";
import { ConsultantsProvider } from "./contexts/ConsultantsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WindowWidthProvider>
        <UserProvider>
          <NewUserProvider>
            <ConsultantsProvider>
              <App />
            </ConsultantsProvider>
          </NewUserProvider>
        </UserProvider>
      </WindowWidthProvider>
    </BrowserRouter>
  </StrictMode>,
);
