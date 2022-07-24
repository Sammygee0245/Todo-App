let input = document.querySelector("#input")
let button = document.querySelector("#mybtn")
let todo = document.querySelector("#container")
let reset = document.querySelector("#clear")
let date = document.querySelector("#date")

//creating an array to store the values
let todos = []


function del(){}


function rendering(){
    //created a resert befor looping through the array again
    todo.innerText = ""

    todos.forEach(function(param){
        let element = document.createElement("h3")
        element.innerText = param
        let deletebtn = document.createElement("button")
        deletebtn.innerText = "Delete"
        element.appendChild(deletebtn)
        deletebtn.style =  "margin-left:17px; background-color:gold; padding:0; "
        todo.appendChild(element)

        deletebtn.addEventListener("click" del)
    })
}

function addTodo(){
    todos.push(date.value+"__"+input.value)
    rendering()
    input.value = ""
    date.value = ""
}

function clear(){
    todos = empty=[]
    todo.innerText = todos
}

reset.addEventListener("click",clear)

button.addEventListener("click",addTodo)