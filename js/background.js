const images = [
    "img0.jpeg",
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg"
]

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImg}`;
document.body.appendChild(bgImage); // 맨 뒤에 추가 
// document.body.prepend(bgImage); 맨 위에 추가