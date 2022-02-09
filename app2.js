// document.title = "Hello! From JS!";
// const h1 = document.getElementById("title");
const h1 = document.querySelector(".hello:first-child h1"); // quertSelectors는 CSS selector처럼 쓰면 됨. 안에 있는 것 까지 선택할 수 있음

console.dir(h1); // console.dir => console.log보다 element를 더 자세하게 보여줌 

// h1.innerText = "Got you"

// h1.style.color = "blue";

function handleTitleClick(){
    h1.style.color = "green";
}

function handleMouseEnter(){
    h1.style.color = "gold";
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave(){
    h1.style.color = "red";
    h1.innerText = "Mouse is gone!"
}

h1.addEventListener("click", handleTitleClick); // handleTitleClick 뒤에 ()를 넣지 않는 이유: javascript에 function만 넘기고 클릭이벤트 발생시에 함수 실행하기위해서
h1.addEventListener("mouseenter", handleMouseEnter); 
h1.addEventListener("mouseleave", handleMouseLeave); 
// => 아래와 같이 쓸 수 있음(하지만 한 눈에 이해하기 어렵고, removeEventListener 사용불가함)
// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!")
}

function handleWindowOffline(){
    alert("SOS NO WIFI!")
}

function handleWindowOnline(){
    alert("ALL GOOD!")
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);