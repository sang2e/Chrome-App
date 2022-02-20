const API_KEY = "446d808182cc7c18ff8338f6648e50ca";

function onGeoOk(position) {
    const lat = position.coords.latitude;  // 위도
    const lon = position.coords.longitude;  // 경도
    // console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // &units=metric 화씨를 섭씨로 바꿔줌 
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.name, data.weather[0].main) // Network에서 보면 쉽게 이해 감
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} | ${data.main.temp}°C | `;
        city.innerText = data.name;
        // const name = data.name; 도시 이름
        // const weather = data.weather[0].main; 날씨
        // const temp = data.main.temp; 온도
        // const tempMin = data.main.temp_min; 최저기온
        // const tempMax = data.main.temp_max; 최고기온
    });  // response.json() = url 내용 전부, data로 받아옴
    // 실제로 url에 갈 필요 없이 js가 대신 url을 부름 , 개발자 도구 Network에서 확인 가능
    // fetch()는 프로미스로 서버가 응답하는데 시간이 걸림 => then()을 사용해야 함
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //argument 2개가 필요: 모든게 정상적으로 될때 실행 될 함수 & 에러가 뜰 때 실행 될 함수