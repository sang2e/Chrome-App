const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();  //new Date(): 호출하는 현재 날짜, 시간 값을 가져올 수 있음
    // date.getDate();           //날짜
    // date.getDay();            //요일(배열로 일요일이 0 부터 시작)
    // date.getHours();          //시간
    // date.getMinutes();        //분
    // date.getSeconds();        //초
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); 
setInterval(getClock, 1000);     //지정한 시간 만큼 뒤에 반복해서 실행
// setTimeout(getClock, 1000);  setTimeout은 지정시간 이후에 한번만 실행

//"1".padStart(2, "0");     ***숫자에는 쓸 수 없으므로 숫자에 사용하려면 String(number)을 사용해서 문자로 바꿔줘야함
//string에 쓸 수 있는 함수로 "1" => "01"로 바꿔서 표시할 수 있음 ==> 여기서는 길이가 1인 문자, 즉 2자리가 아니면 앞에 "0"을 추가
//padStart()  <-> padeEnd() 뒤쪽에 지정한 문자 추가