// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton  = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton  = document.querySelector("#login-form button");

// const link = document.querySelector("a"); 

// function buttonClick() {
function onLoginSubmit(event) {
    // console.log("Hello "+loginInput.value); 
    event.preventDefault();  //어떤 function에 대해 브라우저가 '기본적으로 수행하는 것'을 멈춤 => 여기서는 'submit할 때 브라우저가 새로고침 되는 것'을 멈춤
    const username = loginInput.value;
    // if(username === ""){
    //     alert("Please write your name")
    // } else if(username.length > 15) {
    //     alert("Your name is too long")
    // }
    console.log(username)
}

// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);
// }

// loginButton.addEventListener("click", buttonClick); 

loginForm.addEventListener("submit", onLoginSubmit); 
link.addEventListener("click", handleLinkClick)