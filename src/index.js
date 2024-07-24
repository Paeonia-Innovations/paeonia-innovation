import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Variables to store touch start coordinates
let startX, startY;

// Prevent horizontal scrolling by touch on mobile devices
document.addEventListener(
  "touchstart",
  function (event) {
    startX = event.touches[0].pageX;
    startY = event.touches[0].pageY;
  },
  { passive: false }
);

document.addEventListener(
  "touchmove",
  function (event) {
    var deltaX = event.touches[0].pageX - startX;
    var deltaY = event.touches[0].pageY - startY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault();
    }
  },
  { passive: false }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
