document.addEventListener("DOMContentLoaded", () => {
    
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.id = "taskInput";
    taskInput.placeholder = "Enter something idk";
    document.body.insertBefore(taskInput, document.getElementById("addTask"));
    
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        
        const taskTest = taskInput.value.trim();
        
        if (taskTest) {
            const li = document.createElement("li");
            li.innerHTML = `${taskTest} <button onclick="removeTask(this)"> YAY! </button>`;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    window.removeTask = (button) => {
        button.parentElement.remove();
    };
})

