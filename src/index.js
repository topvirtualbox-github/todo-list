import "./css/normalize.css";
import "./css/style.css";
import { loadStorage } from "./modules/app.js";
import { renderAll } from "./modules/dom.js";

const START = (() =>  {
    window.addEventListener("load", () => {
        loadStorage();
        renderAll();
    });
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");
    const bars = document.querySelector(".bars");
    const reset = document.querySelector(".reset");
    bars.addEventListener("click", () => {
        nav.classList.toggle("open");
        nav.classList.toggle("close");
        main.classList.toggle("small");
        main.classList.toggle("big");
    });
    reset.addEventListener("click", () => {
        if (confirm("This will reset all your folders, do you wish to continue?")) {
            window.localStorage.clear();
            loadStorage();
            renderAll();
        }
    });
})();