import "./styles.css";
import { dialogInput} from "./createList.js";
import { projectDialogInput } from "./createProject.js";
import { openingProjectTask, projectArray } from "./dom.js";
import { retrieveProjects } from "./storage.js";



document.addEventListener("DOMContentLoaded", () =>{
  retrieveProjects();


  if (projectArray.length === 0) {
    openingProjectTask();
  }
    dialogInput();
    projectDialogInput();
});





