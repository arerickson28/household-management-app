const newFormHandler = async (event) => {
  event.preventDefault();

  const task = document.querySelector("#newTask").value.trim();
  const notes = document.querySelector("#newNotes").value.trim();

  if (task && notes) {
    const response = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({ task, notes }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/notepage");
    } else {
      alert("Failed to create task");
    }
  }
};

document.querySelector(".todo-form").addEventListener("submit", newFormHandler);
