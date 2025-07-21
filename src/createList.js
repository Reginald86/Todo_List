import { renderTodoList, resetInputs, state } from "./dom.js";

export function CreateTodo(name, date, description) {
  this.name = name;
  this.date = date;
  this.description = description;
}

export function dialogInput() {
  const dialog = document.getElementById("dialog");
  const openBtn = document.getElementById("openBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const name = document.getElementById("name");
  const date = document.getElementById("date");
  const description = document.getElementById("description");
  const form = document.getElementById("form");

  openBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = new CreateTodo(name.value, date.value, description.value);
    console.log("Adding todo:", todo);

    if (state.currentProject) {
      state.currentProject.projectTodos.push(todo); 
      renderTodoList(state.currentProject.projectTodos); 
    }

    resetInputs(name, date, description);
    dialog.close();
  });

  cancelBtn.addEventListener("click", () => {
    dialog.close();
    resetInputs(name, date, description);
  });
}
