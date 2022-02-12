// const a = 10;
// const b = 3;

// const myName = "sange";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// const character = [true, "man", 33];

// console.log(character);


// character.push("cat");

// console.log(character);

// const playerName = "sange";
// const playerHandsome = true;
// const playerFat = "not";
// const playerPoints = 13221837921738;

// const player = {
//     name : "sange",
//     handsome : true, 
//     fat : "not", 
//     points : 13
// };

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);


// console.log(player.fat);
// player.fat = "little";
// console.log(player.fat);

// player.lastName = "potato";
// player.points = player.points + 100;
// console.log(player);


// const calculator = {
//     add: function(a, b) {
//         console.log(a + b)
//     },
//     minus: function(a, b) {
//         console.log(a - b)
//     },
//     divide: function(a, b) {
//         console.log(a / b)
//     },
//     powerOf: function(a, b){
//         console.log(a ** b)
//     }
// }

// calculator.add(12, 10);
// calculator.minus(29, 18);
// calculator.divide(100, 4);
// calculator.powerOf(2, 2);

// const age = prompt("How old are you?");

//console.log(typeof age);  
//typeof => 변수의 타입을 확인할 때 씀 ex) typeof variable

// parseInt()  => 문자를 숫자로 바꿔주는 함수
// console.log(typeof "15", typeof parseInt("15"));

const age = parseInt(prompt("How old are you?"));

// isNaN()  => NaN인지 아닌지 확인할 때 쓰는 함수, true/false 값을 리턴함 == true/false 값으로 나타나므로 조건문에서 따로 === 를 쓰지 않아도 됨
// console.log(isNaN(age));

if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number.")
} else if(age < 18){
    console.log("You are too young.")
} else if(age >= 18 && age <= 50){  // && == and, || == or
    console.log("You can drink.")
} else if(age > 50 && age <= 80){  
    console.log("You should exercise.")
} else if(age > 80){  
    console.log("You can do whatever you want.")
// } else {
    // console.log("Thank you for writing your age.")
    // console.log("You can't drink.")
}