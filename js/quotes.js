const quotes = [
    {
        quote : "Believe in yourself.",
        korean : "자기 자신을 믿어라."
    },
    {
        quote : "Follow your heart.",
        korean : "마음이 원하는대로 하라."
    },
    {
        quote : "You only live once.",
        korean : "인생은 한번뿐이다."
    },
    {
        quote : "Love yourself.",
        korean : "자기 자신을 사랑하라."
    },
    {
        quote : "No pain, No gain.",
        korean : "고통없인 얻는 것도 없다."
    },
    {
        quote : "Be brave.",
        korean : "용감해져라."
    },
    {
        quote : "If not now, then when?",
        korean : "지금이 아니면 언제 할 것인가?"
    },
    {
        quote : "Your success is up to your efforts.",
        korean : "성공은 당신의 노력에 달려있다."
    },
    {
        quote : "Dont't waste your youth.",
        korean : "젊음을 낭비하지 마라."
    },
    {
        quote : "Life is all about timing.",
        korean : "인생은 타이밍이다."
    },
]

const neonColor = ["rgb(248, 51, 160)", "rgb(43, 80, 245)", "rgb(51, 248, 205)", "rgb(248, 245, 51)", "rgb(51, 248, 61)", "rgb(160, 23, 240)", "rgb(248, 146, 51)"]


const quote = document.querySelector("#quote span:first-child");
// const korean = document.querySelector("#quote span:last-child");

// Math.random()  // 0 ~ 1 사이의 무작위 수
// Math.round(1.1) // 1.1 => 1, 1.8 => 2 // 반올림하여 소수점 삭제
// Math.ceil(1.1) // 1.1 => 2, 1.0먼 1 // 올림하여 소수점 삭제
// Math.floor(1.9999) // 1.9999 => 1 // 내림하여 소수점 삭제

//Math.floor(Math.random() * 10);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 배열의 길이를 숫자로 적으면 추가, 삭제시 값을 수동으로 수정해야하기 때문에 length 사용

quote.innerText = todaysQuote.quote;
// korean.innerText = todaysQuote.korean;

function neonOn() {
    // quote.classList.toggle("neon");
    const randomNeon = Math.floor(Math.random() * neonColor.length);
    quote.style.textShadow = `
        0 0 7px ${neonColor[randomNeon]},
        0 0 10px ${neonColor[randomNeon]},
        0 0 21px ${neonColor[randomNeon]},
        0 0 42px ${neonColor[randomNeon]},
        0 0 82px ${neonColor[randomNeon]},
        0 0 92px ${neonColor[randomNeon]},
        0 0 102px ${neonColor[randomNeon]},
        0 0 151px ${neonColor[randomNeon]}
    `;
    quote.style.opacity = 1;
}

// function neonOff() {
//     quote.style.textShadow = "none";
//     quote.style.opacity = .5;
// }

quote.addEventListener("mouseenter", neonOn);
// quote.addEventListener("mouseleave", neonOff);