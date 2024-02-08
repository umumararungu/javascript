const task_list= []
function addtask(task){
    return task_list.push(task)
}

addtask('web_design')
addtask('web_app')
addtask('pyhton')
addtask('java')
addtask('c')
addtask('c++')

console.log('Added Task \n----------------\n'+task_list.join("\n "))

// console.log(task_list)
// const remove_task = task_list.pop()

function removetask(){
    return task_list.splice(1,2)
}
console.log('Completed Task \n----------------\n'+removetask().join("\n "))

 function sorting(){
    return task_list.toSorted()
 }
//  sorting()
 console.log('Sorted Task \n----------------\n'+sorting().join("\n "))
