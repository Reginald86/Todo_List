import "./styles.css";
import { dialogInput} from "./createList.js";
import { projectDialogInput } from "./createProject.js";
import { openingProjectTask } from "./dom.js";



document.addEventListener("DOMContentLoaded", () =>{
    openingProjectTask();
    dialogInput();
    projectDialogInput();
});





