import { folders } from "./app.js";

const renderFolders = () => {
    const nav = document.querySelector("nav");
    while (nav.hasChildNodes()) { nav.removeChild(nav.lastChild); }
    folders.forEach((element, index) => {
        const button = document.createElement("button");
        button.classList.add("folder");
        button.textContent = folders[index].name;
        nav.append(button);
        button.addEventListener("click", () => {
            renderFolderTodoList(folders[index]);
        });
    });
}

const renderFolderTodoList = (folder) => {
    const main = document.querySelector("main");
    while (main.hasChildNodes()) { main.removeChild(main.lastChild); }
    folder.list.forEach(element => {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        todo.textContent = element.task;
        main.append(todo);
    });
}

export { renderFolders, renderFolderTodoList };