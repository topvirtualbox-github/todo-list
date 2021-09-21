import "./css/normalize.css";
import "./css/style.css";
import { folders } from "./modules/app.js";
import { renderFolders, renderFolderTodoList } from "./modules/dom.js";

window.addEventListener("load", () => {
    renderFolders();
    renderFolderTodoList(folders[0]);
});