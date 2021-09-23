const folders = [
    { name: "Folder 1", list: [{ task: "Task 1" }, { task: "Task 2" }, { task: "Task 3" }] },
    { name: "Folder 2", list: [{ task: "Task 4" }, { task: "Task 5" }, { task: "Task 6" }] },
    { name: "Folder 3", list: [{ task: "Task 7" }, { task: "Task 8" }, { task: "Task 9" }] },
];

let current = folders[0];

const todoFactory = (task) => {
    return { task };
}

const addTodo = (e) => {
    const task = document.querySelector(".task").value;
    e.preventDefault();
    const todo = todoFactory(task);
    current.list.push(todo);
}

export { folders, current, addTodo };