let tasks = [];

const addTask = (tasks, description) => {
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, description, completed: false };
    tasks.push(newTask);
    console.log(`Task added: ${description} (ID: ${id})`);
};

const viewTasks = tasks => {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        tasks.forEach(task => {
            console.log(`[ID: ${task.id}] ${task.description} - Completed: ${task.completed}`);
        });
    }
};

const updateTask = (tasks, id, newDescription) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.description = newDescription;
        console.log(`Task updated: ${task.description} (ID: ${task.id})`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

const deleteTask = (tasks, id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        console.log(`Task deleted: ${tasks[index].description}`);
        tasks.splice(index, 1);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

const toggleTaskStatus = (tasks, id) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        console.log(`Task status updated: ${task.description} - Completed: ${task.completed}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

const searchTasks = (tasks, keyword) => {
    const results = tasks.filter(task => task.description.toLowerCase().includes(keyword.toLowerCase()));
    if (results.length > 0) {
        results.forEach(task => {
            console.log(`[ID: ${task.id}] ${task.description} - Completed: ${task.completed}`);
        });
    } else {
        console.log(`No tasks found matching "${keyword}".`);
    }
};

const showMenu = () => {
    console.log("\nTask Manager");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Update Task");
    console.log("4. Delete Task");
    console.log("5. Toggle Task Status");
    console.log("6. Search Tasks");
    console.log("7. Exit");
};

const runTaskManager = () => {
    let choice = '';
    while (choice !== '7') {
        showMenu();
        choice = prompt("Choose an option:");

        switch (choice) {
            case '1':
                const description = prompt("Enter task description:");
                addTask(tasks, description);
                break;
            case '2':
                viewTasks(tasks);
                break;
            case '3':
                const idToUpdate = parseInt(prompt("Enter task ID to update:"));
                const newDescription = prompt("Enter new task description:");
                updateTask(tasks, idToUpdate, newDescription);
                break;
            case '4':
                const idToDelete = parseInt(prompt("Enter task ID to delete:"));
                deleteTask(tasks, idToDelete);
                break;
            case '5':
                const idToToggle = parseInt(prompt("Enter task ID to toggle completion:"));
                toggleTaskStatus(tasks, idToToggle);
                break;
            case '6':
                const keyword = prompt("Enter keyword to search:");
                searchTasks(tasks, keyword);
                break;
            case '7':
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid option. Please try again.");
                break;
        }
    }
}
runTaskManager();