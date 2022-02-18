import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <div className="h-screen select-none bg-gradient-to-br from-purple-100 via-cyan-50 to-pink-100 py-2 antialiased">
        <App />
      </div>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
setInterval(tick, 1000);
tick();

reportWebVitals();
