let input = document.querySelector("#input")
let button = document.querySelector("#mybtn")
let todo = document.querySelector("#container")
let reset = document.querySelector("#clear")
let date = document.querySelector("#date")


function im(){
    let img = document.createElement("img")
    img.setAttribute("src","image/delete icon.jpg")
    img.classList.add("del")
    element.append(img)
}


//creating an array to store the values
let todos = []




function rendering(){
    //created a resert befor looping through the array again
    todo.innerText = ""

    todos.forEach(function(param){
        let element = document.createElement("h3")
        element.innerText = param
        let deletebtn = document.createElement("input")
        deletebtn.src = "image/download.png"
        deletebtn.type = "image"
        element.appendChild(deletebtn)
        deletebtn.style = "height:20px; margin-left:17px; margin-top:20px;"
        todo.appendChild(element)

    deletebtn.addEventListener("click", dell)

    })
}


function dell(){
    element.innerText = ""
    console.log("deleted")
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