const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list");

const TODOS_KEY = "todos";

let toDos = [];  // 새로고침하면 이전에 저장되어있던 toDos가 없어지기 때문에 변수를 업데이트할 수 있게 let으로 바꾸고 빈 배열이 아닌 이미저장된 값과 새로 추가된 값을 동시에 저장할 수 있도록 만들어야함

function saveTodos() {
    // JSON.stringify(value) : JavaScript Object, array, 어떤 js 코드던간에 value값을 문자(string)으로 바꿔줌
    // localStorage.setItem(TODOS_KEY, toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에 '배열(array) 모양처럼' 넣기 위해서
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // console.log(typeof li.id);
    toDos = toDos.filter(toDos => toDos.id !== parseInt(li.id));
    saveTodos();
}

function printToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;  // 39행 id 지정
    const span = document.createElement("span");  // li로 span을 감싸는 이유 : 리스트를 삭제할 버튼을 추가하기 위해서
    // span.innerText = newTodo;  
    span.innerText = newTodo.text; // 39행 - object의 text를 가져와야 하기 때문  
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()   // 현재 시간을 밀리초로 나타냄(계속 바뀌므로 랜덤값과 유사하다고 볼 수 있음), 각각의 item을 구별하기 위해 id를 줌
    }
    // toDos.push(newTodo); 
    // printToDo(newTodo);
    toDos.push(newTodoObj);  // 텍스트를 그냥 저장하게 되면 지울 때 어떤걸 지워야할지 js가 판단할 수 없기 때문에 objcect로 만들어야함
    printToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {  // event와 같이 기본적으로 제공되는 것, array의 각 item에 적용
//     console.log("this is the turn of", item);
// }

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos) {
    const parsedToDos = JSON.parse(savedTodos);
    // localStorage에 toDo가 있으면 toDo에 parsedToDos를 넣어서 전에 있던 toDo를 복원함
    toDos = parsedToDos;
    // JSON.parse("[1,2,3,4]") => [1,2,3,4]  JSON.parse에 문자를 넣으면 js가 이해할 수 있는 '배열(array)로 바꿔줌'
    // localStorage.getItem(TODOS_KEY);  => 단순한 텍스트 // JSON.parse(localStorage.getItem("TODOS_KEY)); => 텍스트를 배열로 바꿔줌
    console.log(parsedToDos);
    // parsedToDos.forEach(sayHello);      // array안에 있는 각각의 item에 function을 실행시킴
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));  // function을 새로 만들지 않고 위와 같이 만들기
    parsedToDos.forEach(printToDo);  
}

// function sexyFilter(item) {return item !== 3} // array의 각 item, 어떤 item을 제외할 지 적으면 됨
// return true;   filter에 사용되는 함수는 반드시 'true'를 리턴해야 함, false를 리턴하면 새 array에 포함되지 않음!
// [1,2,3,4].filter(sexyFilter);  //forEach와 비슷하게 동작함, 71행 filter결과로 [1,2,4]가 출력됨

// const arr = [123, 3432, 442, 5643, 23];
// function sexyFilter(item) {return item <= 1000 };
// console.log(arr.filter(sexyFilter)) // => arr = [123, 442, 23]


// const arr = [1,2,3,4];
// arr.filter(item => item > 2); // => [3,4]    filter는 기존 array를 변경하지 않는다. 새 array를 생성함
// const newArr = arr.filter(item => item > 2); 
// console.log(arr); // => [1,2,3,4]  
// console.log(neaArr); // => [3,4]
