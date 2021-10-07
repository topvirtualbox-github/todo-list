let customFolders = [];

const defaultFolders = [
    { name: "Default", list: [
        { task: "Work" },
        { task: "Exercise" },
        { task: "Study" },
    ] },
    { name: "Tutorial", list: [
        { task: "Click New Folder button" },
        { task: "Click New Todo button" },
        { task: "Click ☰ button to close the left panel" },
    ] },
];

let current;

const folderFactory = (name, list) => {
    return { name, list };
}

const addFolder = (e) => {
    const name = document.querySelector(".input-name").value;
    const list = [];
    e.preventDefault();
    const folder = folderFactory(name, list);
    customFolders.push(folder);
    saveStorage();
}

const todoFactory = (task) => {
    return { task };
}

const addTodo = (e) => {
    const task = document.querySelector(".input-task").value;
    e.preventDefault();
    const todo = todoFactory(task);
    current.list.push(todo);
    saveStorage();
}

function saveStorage() {
    localStorage.setItem("folders", JSON.stringify(customFolders));
}

function loadStorage() {
    const storage = localStorage.getItem("folders");
    if (!storage) {
        localStorage.setItem("folders", JSON.stringify(defaultFolders));
        customFolders = JSON.parse(localStorage.getItem("folders"));
    } else {
        customFolders = JSON.parse(localStorage.getItem("folders"));
    }
    current = customFolders[0];
}

export { customFolders, current, addFolder, addTodo, loadStorage, saveStorage };