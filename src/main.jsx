import React from "react";
import ReactDOM from "react-dom/client"; // import Main from "./components/Main/Main";
import "./index.css";
import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
