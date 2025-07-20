import { CreateTodo } from "./createList";
import { CreateProject } from "./createProject";
import projectopen from "./images/projectopen.svg"; 




export function resetInputs(...elements) {
  elements.forEach(el => el.value = "");
}


let todoCount = 0;

export function renderTodoList (todo){
    const todoContainer = document.getElementById("todoContainer");
    todoContainer.innerHTML = "";


    todo.forEach((todo, index) => {
    const todoIndividual = document.createElement("div");
    todoIndividual.id = `todo-${index}`;
    todoIndividual.className = "todoIndividual";
  
    todoCount++;
    
    todoIndividual.innerHTML = `
    <p><strong>${todo.name}</strong></p>
    <p>${todo.date}</p>
    <p>${todo.description}</p>
`;
    todoContainer.append(todoIndividual);
    })
}


let projectCount = 1;
export let projectArray = [];

export function addProject(project) {
  const dashboard = document.getElementById("dashboard");

  const projectElement = document.createElement("div");
  projectElement.className = "project-card";
  projectElement.id = `project-${projectCount}`;
 projectElement.innerHTML = `
  <h3>${project.name}</h3>
  <p>${project.description}</p>
  <button class="selectProjectBtn">
    <svg class="btn-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="currentColor" />
    </svg>
  </button>
`;


  dashboard.append(projectElement);

  const selectProjectBtn = projectElement.querySelector(".selectProjectBtn");
  selectProjectBtn.addEventListener("click", () => {
    currentProject = project;
    console.log("Current project set to:", currentProject);
    renderTodoList(currentProject.projectTodos); 
  });

  projectArray.push(projectElement.id);
  projectCount++;
  console.log(projectArray);
}




export let currentProject; 

export function openingProjectTask() {
   let firstProject = new CreateProject("Project 1", "First Project");
   firstProject.id = `project-${projectCount}`;
   addProject(firstProject);
   currentProject = firstProject;
   console.log(currentProject)
    let firstTask = new CreateTodo("Walk the Dog", "09-01-2025", "You know what happens if you don't")
    if (currentProject) {
      currentProject.projectTodos.push(firstTask); 
      renderTodoList(currentProject.projectTodos); 
    }
}







