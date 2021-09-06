const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement; 
    li.remove(); // event.path[1].remove(); 이렇게 해도 가능!!!   
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); // createElement 안에는 html 태그 이름 사용, 변수에는 그럴 필요 x
    li.id = newTodo.id; // newTodo가 함수의 parameter (newTodo 말고 다른 이름도 가능)
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); // parameter로 object를 받음
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // key에 해당하는 value를 가져옴 (object 형태)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}