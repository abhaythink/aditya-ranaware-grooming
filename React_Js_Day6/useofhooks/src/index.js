import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import ContextProvider from "./components/Context-store/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
