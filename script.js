

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const email = event.target.email.value;
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

// To-Do List functionality
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Add remove on click
        li.addEventListener("click", function() {
            this.remove();
        });

        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}