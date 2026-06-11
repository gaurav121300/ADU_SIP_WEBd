const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList")

let todos = JSON.parse(localStorage.getItem("todos")) || [];

renderTodos();

addBtn.addEventListener("click",() => {
    const todo = input.value; 

    if(todo.trim() === ""){
        return;
    }

    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

    input.value = "";
    renderTodos();
})

function renderTodos(){
    todoList.innerHTML = "";
    todos.forEach((todo,index) => {
        const li = document.createElement("li");
        li.textContent = todo;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click",() => {
            todos.splice(index,1);

            localStorage.setItem("todos",JSON.stringify(todos));

            renderTodos();
        })
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    })
}

// let fruits = ["Apple","Mango","Banana","Papaya","Orange"]; 

// //array.splice(startInd,deleteCount)
// console.log(fruits)
// fruits.splice(3,2);
// console.log(fruits)