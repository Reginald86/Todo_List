import { addProject, renderTodoList, resetInputs, state } from "./dom.js";


export function CreateProject (name, description){
    this.name = name;
    this.id = `${name}-${Date.now()}`
    this.description = description;
    this.projectTodos = [];
}

export function projectDialogInput() {

    const projectDialog = document.getElementById("projectDialog");
    const projectCancelBtn = document.getElementById("projectCancelBtn");
    const projectOpenBtn = document.getElementById("projectOpenBtn");
    const projectName = document.getElementById("projectName");
    const projectDescription = document.getElementById("projectDescription");
    const projectForm = document.getElementById("projectForm");

projectOpenBtn.addEventListener('click', () => {
        projectDialog.showModal();
    })

     projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
      
            const project = new CreateProject(projectName.value, projectDescription.value)
            console.log(project);
            
            resetInputs(projectName, projectDescription)
            projectDialog.close();
            state.currentProject = project;
            addProject(project);
            renderTodoList(state.currentProject.projectTodos)
    });

      projectCancelBtn.addEventListener('click', () => {
        projectDialog.close(); 
        resetInputs(projectName, projectDescription)
    });
}
