const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    // const currentColor = h1.style.color;  // getter,  코드는 위에서 아래로 진행
    // let newColor;                         // setter,  오른쪽 값을 왼쪽에 대입
    // if(h1.style.color === "green"){
    //     h1.style.color = "tomato";
    // } else {
    //     h1.style.color = "green";
    // }

    // javascript에서 css를 변경하는 것은 스마트하지 못함 => style은 css에서 변경 할 것
    // if(currentColor === "green"){
    //     newColor = "tomato";
    // } else {
    //     newColor = "green";
    // }
    // h1.style.color = newColor;

    // const clickedClass = "clicked";
    // if(h1.className === clickedClass){ className은 모든 클래스를 지우거나 변경하므로 classList를 사용해서 해당 클래스가 있는지 확인하면 됨
    // if(h1.classList.contains(clickedClass)){
    //     // h1.className = "";
    //     h1.classList.remove(clickedClass);
    // } else{
    //     // h1.className = clickedClass;
    //     h1.classList.add(clickedClass);
    // }

    //더 쉬운 방법 toggle 사용하기
    // h1.classList.toggle(clickedClass);  한번만 쓰기 때문에 변수를 사용하지 않아도 됨
    h1.classList.toggle("clicked");
    
}

h1.addEventListener("click", handleTitleClick);