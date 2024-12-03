import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AddressProvider } from "./context/AddressContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddressProvider>
      <App />
    </AddressProvider>
  </StrictMode>
);
