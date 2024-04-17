function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = function() {
            li.classList.toggle("completed");
        };
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
