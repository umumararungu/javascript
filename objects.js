const task_list= []
function addtask(task){
    return task_list.push(task)
}

addtask('web_design')
console.log(task_list)
// const remove_task = task_list.pop()

function removetask(){
    const remove_task = task_list.pop()
    return task_list
}

// console.log(removetask())
