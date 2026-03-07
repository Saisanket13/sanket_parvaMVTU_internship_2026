function addtask(){
    var input = document.getElementById("task");
    var taskValue = input.value;
    console.log(taskValue);

    if(taskValue===""){
        window.alert("Please enter a task");
        return;
    }
    else{
        var li=document.createElement("li");
        li.innerText=taskValue;
        var taskList = document.getElementById("task-list");
        taskList.appendChild(li);
        input.value="";
    }
}

function deltask(){
    var taskList = document.getElementById("task-list");
    if(taskList.lastChild===null){
        window.alert("No task to delete");
        return;
    }else{
        taskList.removeChild(taskList.lastChild);
    }
}