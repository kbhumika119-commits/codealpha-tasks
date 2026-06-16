const taskInput = document.getElementById("taskInput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

addbtn.addEventListener("click", function () {

    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="btn btn-danger btn-sm delete-btn">
            Delete
        </button>
    `;

    tasklist.appendChild(li);

    let deletebtn = li.querySelector(".delete-btn");

    deletebtn.addEventListener("click", function () {
        li.remove();
    });

    taskInput.value = "";
});