import { CreateTodo } from "./createList";
import { CreateProject } from "./createProject";





export function resetInputs(...elements) {
  elements.forEach(el => el.value = "");
}


let todoCount = 0;
let projectCount = 1;
export let projectArray = [];
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
  
    todoCount++;

    let todoName = document.createElement("h2");
    todoName.className = "todoName"
    todoIndividual.append(todoName)
    todoName.textContent = todo.name;
    let todoDate = document.createElement("p");
    todoDate.className = "todoDate"
    todoIndividual.append(todoDate)
     todoDate.textContent = todo.date;
    let todoDescription = document.createElement("p");
    todoName.className = "todoDescription"
    todoIndividual.append(todoDescription)
    todoDescription.textContent = todo.description;
    

    todoContainer.append(todoIndividual);
    })
}





export function addProject(project) {

  const dashboard = document.getElementById("dashboard");
  const projectElement = document.createElement("div");
  projectElement.className = "project-card";
  projectElement.id = `project-${projectCount}`;
  
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


dashboard.append(projectElement);

  
selectProjectBtn.addEventListener("click", () => {
    state.currentProject = project;
    console.log("Current project set to:", state.currentProject);
    renderTodoList(state.currentProject.projectTodos); 
  });

  projectArray.push(projectElement.id);
  projectCount++;
  console.log(projectArray);

}



export function openingProjectTask() {
   let firstProject = new CreateProject("Project 1", "First Project");
   firstProject.id = `project-${projectCount}`;
   addProject(firstProject);
   state.currentProject = firstProject;
   console.log(state.currentProject)
    let firstTask = new CreateTodo("Walk the Dog", "09-01-2025", "You know what happens if you don't")
    if (state.currentProject) {
      state.currentProject.projectTodos.push(firstTask); 
      renderTodoList(state.currentProject.projectTodos); 
    }
}







