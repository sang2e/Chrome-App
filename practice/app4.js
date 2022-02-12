// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton  = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton  = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

// const link = document.querySelector("a"); 

const HIDDEN_CLASSNAME = "hidden";   // 반복되는 string들은 대문자 변수로 저장하는게 좋음
const USERNAME_KEY = "username";

// function buttonClick() {
function onLoginSubmit(event) {
    // console.log("Hello "+loginInput.value); 
    event.preventDefault();  //어떤 function에 대해 브라우저가 '기본적으로 수행하는 것'을 멈춤 => 여기서는 'submit할 때 브라우저가 새로고침 되는 것'을 멈춤
    // if(username === ""){
        //     alert("Please write your name")
        // } else if(username.length > 15) {
            //     alert("Your name is too long")
            // }
            // console.log(username)
            
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    const username = loginInput.value;
    paintGreetings(username);
    localStorage.setItem(USERNAME_KEY, username);  // 브라우저에 저장
    // localStorage.getItem(USERNAME_KEY);            // 저장된 값 불러오기
    // localStorage.removeItem(USERNAME_KEY);         // 저장된 값 삭제하기
}

// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);
// }

// loginButton.addEventListener("click", buttonClick); 

// loginForm.addEventListener("submit", onLoginSubmit); 
// link.addEventListener("click", handleLinkClick)

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);   
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
} else {
    paintGreetings(savedUsername);
} 