const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list");

function printToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");  // li로 span을 감싸는 이유 : 리스트를 삭제할 버튼을 추가하기 위해서
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    printToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);