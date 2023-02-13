import * as api from "./api.js";


const addTaskBtn = document.getElementById('addTask');
const taskInput = document.getElementById('task');
const parentDivDisplayTasks = document.getElementById("tasks");
let userId;
let tasks;


const displayTasks = (tasks) => {
    //crée un div parent pour stocker les tâches
    const TaskList = document.createElement("div");
    TaskList.id = "tasksList";

    //crée un div, un p et des boutons pour chaque tâche et l'ajoute au div parent
    tasks.forEach(taskItem => {

        const taskCard = document.createElement("div");
        taskCard.className = "taskCard";

        const taskName = document.createElement("input");
        taskName.value = taskItem.name;
        taskName.addEventListener('keypress', async (event) => {
            const key = event.code;
            if(key === "Enter") {
                try{
                    await api.modifyTask(userId, taskItem.id, taskName.value);
                }catch (e){
                    console.log(e);
                }
                tasks = await api.getTasks(userId);
                displayTasks(tasks);
            }}
            )

        const deleteIcon = document.createElement('i');
        deleteIcon.className = "bi bi-x-circle";
        //deleteIcon.innerHTML = "x";
        deleteIcon.addEventListener('click', async (e) => {
            e.preventDefault();
            try{
                await api.deleteTask(userId, taskItem.id);
            }catch (e){
                console.log(e);
            }
            tasks = await api.getTasks(userId);
            displayTasks(tasks);
        });

        taskCard.appendChild(taskName)
        taskCard.appendChild(deleteIcon)
        TaskList.appendChild(taskCard);
    })

    //supprime le div des tâches déjà présent et le remplace par le nouveau
    try{
        const removeDiv = document.getElementById("tasksList");
        parentDivDisplayTasks.removeChild(removeDiv);
        parentDivDisplayTasks.appendChild(TaskList);
    }catch (e){
        console.log(e)
        parentDivDisplayTasks.appendChild(TaskList);
    }
}


addTaskBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    //creer un utilisateur
    if (userId == null){
        userId = await api.createUser();
    }

    //ajoute une tâche
    const task = taskInput.value;
    await api.createTask(userId, task);
    taskInput.value = '';

    //mise a jour des tâches
    tasks = await api.getTasks(userId);
    try {
        displayTasks(tasks)
    } catch (e) {
        console.log(e);
    }
});

