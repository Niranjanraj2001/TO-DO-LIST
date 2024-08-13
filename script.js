// let input = document.getElementById('input')

// let btn = document.getElementById('btn')

// let todolist = document.getElementById('todolist')

// let todoArr=[]


// window.onload = () =>{
//     todoArr = JSON.parse(localStorage.getItem('todo')) || []
//     todoArr.forEach((x) => { addtodo(x)});
// }

// btn.addEventListener('click', () => {

//    if(input.value == ''){
//     alert('pls enter the text')
//    }else{
//     todoArr.push(input.value)

//     localStorage.setItem('todo',JSON.stringify(todoArr))

//     // console.log(todoArr);

//     // todolist.innerText=input.value

//     addtodo(input.value)

//     input.value = ''
//    }


// })

// function addtodo(x){
// let para = document.createElement('p')
// para.innerText=x
// todolist.appendChild(para)

// para.addEventListener('click',()=>{
//     para.style.textDecoration='line-through'
//     removeTodo(x)
// })

// para.addEventListener('dblclick',()=>{
//     todolist.removeChild(para)
//     removeTodo(x)
// })

// }

// function removeTodo(x){
//     let todoIndex = todoArr.indexOf(x)

//     if(todoIndex > -1){
//         todoArr.splice(todoIndex,1)
//     }

//     localStorage.setItem('todo',JSON.stringify(todoArr))

// }

//  console.log(todoArr);



 console.log("hello");