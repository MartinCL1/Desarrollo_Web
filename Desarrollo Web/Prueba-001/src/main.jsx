import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {Provider} from 'react-redux'
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import store from "./storage/storage.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
