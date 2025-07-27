import { CreateTodo } from "./createList.js";
import { addProject, state, projectArray, renderTodoList } from "./dom.js";
import { CreateProject } from "./createProject";

export function storeProjects () {
    localStorage.setItem("projects", JSON.stringify(projectArray) )
}

export function retrieveProjects () {
    const stored = localStorage.getItem("projects");
        if (!stored) return;

    const parsedProjects = JSON.parse(stored);

    parsedProjects.forEach(proj => {
        const restoreProject = new CreateProject(proj.name, proj.description);
        
        restoreProject.projectTodos = [];

        proj.projectTodos.forEach(todo => {
            const restoreTodo = new CreateTodo(todo.name, todo.date, todo.description)
            restoreProject.projectTodos.push(restoreTodo)
        })
        addProject(restoreProject)
    });

      if (projectArray.length > 0) {
        state.currentProject = projectArray[0];
        renderTodoList(state.currentProject.projectTodos);
  }
}

