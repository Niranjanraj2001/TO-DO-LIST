let input = document.getElementById('input');

let button = document.getElementById('btn');

let todoList = document.getElementById('todolist');



let todosArr = []


window.onload = () => {

   todosArr = JSON.parse(localStorage.getItem('todos')) || []

   todosArr.forEach((x) => {addTodo(x)})
}


button.addEventListener('click', () => {
    
    todosArr.push(input.value);
    
    localStorage.setItem('todos', JSON.stringify(todosArr))

    console.log(todosArr);

    addTodo(input.value);

    input.value = '';
})




function addTodo(todo)
{
    let para = document.createElement('p')

    para.innerText = todo

    todoList.appendChild(para)

    para.addEventListener('click',() => {

        para.style.textDecoration = 'line-through'

        removeTodo(todo)
    })



    para.addEventListener('dblclick',() => {

        todoList.removeChild(para)
       
        removeTodo(todo)
    })
}





function removeTodo(todo)
{
    let todoIndex = todosArr.indexOf(todo)

    if(todoIndex > -1)
    {
        todosArr.splice(todoIndex, 1)
    }

    localStorage.setItem('todos', JSON.stringify(todosArr))

}