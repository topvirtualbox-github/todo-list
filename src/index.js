import "./css/normalize.css";
import "./css/style.css";
import { renderAll } from "./modules/dom.js";

const START = (() =>  {
    window.addEventListener("load", renderAll);
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");
    const bars = document.querySelector(".bars");
    bars.addEventListener("click", () => {
        nav.classList.toggle("open");
        nav.classList.toggle("close");
        main.classList.toggle("small");
        main.classList.toggle("big");
    });
})();