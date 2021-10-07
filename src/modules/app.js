const folders = [
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

let current = folders[0];

const folderFactory = (name, list) => {
    return { name, list };
}

const addFolder = (e) => {
    const name = document.querySelector(".input-name").value;
    const list = [];
    e.preventDefault();
    const folder = folderFactory(name, list);
    folders.push(folder);
}

const todoFactory = (task) => {
    return { task };
}

const addTodo = (e) => {
    const task = document.querySelector(".input-task").value;
    e.preventDefault();
    const todo = todoFactory(task);
    current.list.push(todo);
}

export { folders, current, addFolder, addTodo };