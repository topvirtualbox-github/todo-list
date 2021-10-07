import { customFolders, current, addTodo, addFolder, saveStorage } from "./app.js";

const renderAll = () => {
    renderFolders();
    renderTodoList();
}

const renderFolders = () => {
    const nav = document.querySelector("nav");
    while (nav.hasChildNodes()) { nav.removeChild(nav.lastChild); }
    customFolders.forEach((object, index) => {
        const folder = document.createElement("button");
        folder.classList.add("folder");
        folder.textContent = object.name;
        folder.addEventListener("click", () => {
            current = object;
            renderAll();
        });
        nav.append(folder);
        if (object.name !== "Default") {
            const remove = document.createElement("button");
            remove.classList.add("folder--remove");
            remove.textContent = "X";
            remove.addEventListener("click", (e) => {
                e.stopPropagation();
                if (confirm("Are you sure?")) {
                    customFolders.splice(index, 1);
                    current = customFolders[0];
                    saveStorage();
                    renderAll();
                }
            });
            folder.append(remove);
        }
    });
    const button = document.createElement("button");
    button.classList.add("new-folder");
    button.textContent = "NEW FOLDER";
    button.addEventListener("click", renderFolderForm);
    nav.append(button);
}

const renderTodoList = () => {
    const main = document.querySelector("main");
    while (main.hasChildNodes()) { main.removeChild(main.lastChild); }
    current.list.forEach((object, index) => {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        main.append(todo);
        const text = document.createElement("span");
        text.classList.add("todo--text");
        text.textContent = object.task;
        const remove = document.createElement("button");
        remove.classList.add("todo--remove", "far", "fa-trash-alt");
        remove.addEventListener("click", () => {
            current.list.splice(index, 1);
            saveStorage();
            renderAll();
        });
        todo.append(text, remove);
    });
    const button = document.createElement("button");
    button.classList.add("new-todo");
    button.textContent = "NEW TODO";
    button.addEventListener("click", renderTodoForm);
    main.append(button);
}

const renderFolderForm = () => {
    renderAll();
    const nav = document.querySelector("nav");
    nav.removeChild(nav.lastChild);
    const form = document.createElement("form");
    form.classList.add("form-folder");
    nav.append(form);
    const name = document.createElement("input");
    name.classList.add("input-name");
    name.placeholder = "Enter folder name";
    const submit = document.createElement("button");
    submit.classList.add("submit-folder", "fas", "fa-plus-circle");
    submit.addEventListener("click", (e) => {
        addFolder(e);
        current = customFolders[customFolders.length - 1];
        renderAll();
    });
    form.append(name, submit);
}

const renderTodoForm = () => {
    renderAll();
    const main = document.querySelector("main");
    main.removeChild(main.lastChild);
    const form = document.createElement("form");
    form.classList.add("form-todo");
    main.append(form);
    const task = document.createElement("input");
    task.classList.add("input-task");
    task.placeholder = "Enter new task";
    const submit = document.createElement("button");
    submit.classList.add("submit-todo", "fas", "fa-plus-circle");
    submit.addEventListener("click", (e) => {
        addTodo(e);
        renderAll();
    });
    form.append(task, submit);
}

export { renderAll };