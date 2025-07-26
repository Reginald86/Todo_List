import { CreateTodo } from "./createList";
import { CreateProject } from "./createProject";



export function resetInputs(...elements) {
  elements.forEach(el => el.value = "");
}


export let state = {
  currentProject: null,
};


export function renderTodoList (todo){
    const todoContainer = document.getElementById("todoContainer");
    todoContainer.innerHTML = "";


    todo.forEach((todo, index) => {
    const todoIndividual = document.createElement("div");
    todoIndividual.id = `todo-${index}`;
    todoIndividual.className = "todoIndividual";
  

    let todoName = document.createElement("h2");
    todoName.className = "todoName"
    todoIndividual.append(todoName)
    todoName.textContent = todo.name;
    let todoDate = document.createElement("p");
    todoDate.className = "todoDate"
    todoIndividual.append(todoDate)
     todoDate.textContent = todo.date;
    let todoDescription = document.createElement("p");
    todoDescription.className = "todoDescription"
    todoIndividual.append(todoDescription)
    todoDescription.textContent = todo.description;
    

    todoContainer.append(todoIndividual);
    })
}



export let projectArray = [];

export function addProject(project) {

  const dashboard = document.getElementById("dashboard");
 
  
    const projectElement = document.createElement("div");
    projectElement.id = `${project.name}-${project.id}`;
    projectElement.className = "project-card";

      
  let nameProject = document.createElement("h2");
  nameProject.className = "nameProject";
  projectElement.append(nameProject);
  nameProject.textContent = project.name;
  let descriptionProject = document.createElement("p");
  descriptionProject.className = "descriptionProject";
  projectElement.append(descriptionProject);
  descriptionProject.textContent = project.description;

const selectProjectBtn = document.createElement("button");
selectProjectBtn.className = "selectProjectBtn";

const deleteProjectBtn =  document.createElement("button");
deleteProjectBtn.className = "deleteProjectBtn";
deleteProjectBtn.textContent = "Delete";

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("class", "btn-icon");
svg.setAttribute("viewBox", "0 0 1024 1024");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z");
path.setAttribute("fill", "currentColor");

svg.appendChild(path);
selectProjectBtn.appendChild(svg);
projectElement.appendChild(selectProjectBtn);

projectElement.appendChild(deleteProjectBtn)


dashboard.append(projectElement);

  
selectProjectBtn.addEventListener("click", () => {
    state.currentProject = project;
    console.log("Current project set to:", state.currentProject);
    renderTodoList(state.currentProject.projectTodos); 
  });

  deleteProjectBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this project?")) {

    projectElement.remove();
    const index = projectArray.indexOf(project);

    if (index !== -1) {
      projectArray.splice(index, 1);
        }

      if (state.currentProject === project) {
      const fallbackProject = projectArray[index - 1] || projectArray[index + 1] || null;
      state.currentProject = fallbackProject;
      if (fallbackProject) {
        renderTodoList(fallbackProject.projectTodos);
      } else {
        renderTodoList([]);
      }
    }
  }
  });

  projectArray.push(project);
  console.log(project.id)

}



export function openingProjectTask() {
  const firstProject = new CreateProject("Project 1", "First Project");
  firstProject.projectTodos = []; 
  addProject(firstProject);

  state.currentProject = firstProject;

  const firstTask = new CreateTodo("Walk the Dog", "09-01-2025", "You know what happens if you don't");
  state.currentProject.projectTodos.push(firstTask);

  renderTodoList(state.currentProject.projectTodos);
}







