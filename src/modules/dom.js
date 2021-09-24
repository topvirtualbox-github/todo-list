import { folders, current, addTodo, addFolder } from "./app.js";

const renderFolders = () => {
    const nav = document.querySelector("nav");
    while (nav.hasChildNodes()) { nav.removeChild(nav.lastChild); }
    folders.forEach((object, index) => {
        const folder = document.createElement("button");
        folder.classList.add("folder");
        folder.textContent = folders[index].name;
        folder.addEventListener("click", () => {
            current = folders[index];
            renderFolders();
            renderFolderTodoList(current);
        });
        nav.append(folder);
    });
    const button = document.createElement("button");
    button.classList.add("new-folder");
    button.textContent = "NEW FOLDER";
    button.addEventListener("click", renderFolderForm);
    nav.append(button);
}

const renderFolderTodoList = (folder) => {
    const main = document.querySelector("main");
    while (main.hasChildNodes()) { main.removeChild(main.lastChild); }
    folder.list.forEach(object => {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        todo.textContent = object.task;
        main.append(todo);
    });
    const button = document.createElement("button");
    button.classList.add("new-todo");
    button.textContent = "NEW TODO";
    button.addEventListener("click", renderTodoForm);
    main.append(button);
}

const renderTodoForm = () => {
    const main = document.querySelector("main");
    main.removeChild(main.lastChild);
    const form = document.createElement("form");
    form.classList.add("form-todo");
    main.append(form);
    const task = document.createElement("input");
    task.classList.add("task");
    task.placeholder = "Task";
    const submit = document.createElement("button");
    submit.classList.add("submit", "fas", "fa-plus-circle");
    submit.addEventListener("click", (e) => {
        addTodo(e);
        renderFolderTodoList(current);
    });
    form.append(task, submit);
}

const renderFolderForm = () => {
    const nav = document.querySelector("nav");
    nav.removeChild(nav.lastChild);
    const form = document.createElement("form");
    form.classList.add("form-folder");
    nav.append(form);
    const name = document.createElement("input");
    name.classList.add("name");
    name.placeholder = "Name";
    const submit = document.createElement("button");
    submit.classList.add("submit", "fas", "fa-plus-circle");
    submit.addEventListener("click", (e) => {
        addFolder(e);
        renderFolders();
    });
    form.append(name, submit);
}

export { renderFolders, renderFolderTodoList };