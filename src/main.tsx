import React from "react";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/styles/main.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
