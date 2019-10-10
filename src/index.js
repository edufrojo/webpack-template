import "./scss/custom.scss";
import webpackgif from "./assets/images/webpack.gif";

document.getElementById("webpack-gif").setAttribute("src", webpackgif);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

console.log('Archivo principal de "index.js"');
