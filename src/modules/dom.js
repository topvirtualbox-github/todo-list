import { folders, current, addTodo } from "./app.js";

const renderFolders = () => {
    const nav = document.querySelector("nav");
    while (nav.hasChildNodes()) { nav.removeChild(nav.lastChild); }
    folders.forEach((object, index) => {
        const folder = document.createElement("button");
        folder.classList.add("folder");
        folder.textContent = folders[index].name;
        folder.addEventListener("click", () => {
            current = folders[index];
            renderFolderTodoList(current);
        });
        nav.append(folder);
    });
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
    const open = document.createElement("button");
    open.classList.add("open");
    open.textContent = "NEW TODO";
    open.addEventListener("click", renderTodoForm);
    main.append(open);
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

export { renderFolders, renderFolderTodoList };