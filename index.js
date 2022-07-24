let input = document.querySelector("#input")
let button = document.querySelector("#mybtn")
let todo = document.querySelector("#container")
let reset = document.querySelector("#clear")

//creating an array to store the values
let todos = []


function rendering(){
    //created a resert befor looping through the array again
    todo.innerText = ""

    todos.forEach(function(param){
        let element = document.createElement("h3")
        element.innerText = param
        todo.appendChild(element)
    })
}

function addTodo(){
    todos.push(input.value)
    rendering()
}

function clear(){
    todos = empty=[]
    todo.innerText = todos
}

reset.addEventListener("click",clear)

button.addEventListener("click",addTodo)