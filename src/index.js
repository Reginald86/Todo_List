import "./styles.css";
import { dialogInput} from "./createList.js";
import { projectDialogInput } from "./createProject.js";
import { openingProject } from "./dom.js";



document.addEventListener("DOMContentLoaded", () =>{
    dialogInput();
    projectDialogInput();
    openingProject();
});





