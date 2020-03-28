const container = document.querySelector(".container");
const overlay = document.querySelector(".switch");
const desc = container.querySelector(".desc");
const h1 = desc.querySelector("h1");
const buttons = container.querySelector(".buttons");
const images = ['./img/beach.jpg', './img/italy.jpg', './img/snow.jpg'];
const h1text = ["Beach", "Italy", "Snow"];

// Get random number
const getRandom = () => Math.floor(Math.random() * 3);

// Next image depending on input
const nextImage = (getIndex) => {
  document.documentElement.style.setProperty("--bg-image", `url(${images[getIndex]})`);
  h1.innerText = h1text[getIndex];
}

const addAnimation = () => {
  container.classList.add("fade");
  overlay.classList.add("bord");
  setTimeout(() => {
    container.classList.remove("fade");
    overlay.classList.remove("bord");
  }, 2000);
}

let random = getRandom();
let index = random;
h1.innerText = h1text[random];

// Start up with random image
nextImage(random);

// setInterval(() => {
//   const lastIndex = images.length - 1;
//   if (index < images.length - 1) {
//     addAnimation();
//     setTimeout(() => {
//       nextImage(index + 1);
//       index++;
//     }, 1000);
//   } else if (index === lastIndex) {
//     addAnimation();
//     setTimeout(() => {
//       nextImage(0);
//       index = 0;
//     }, 1000);
//   }
// }, 4000);


// Event listener
buttons.addEventListener("click", (e) => {
  const btnName = e.target.className;
  const lastIndex = images.length - 1;

  if (btnName === "btn-left" && index > 0) {
    addAnimation();
    setTimeout(() => {
      nextImage(index - 1);
      index--;
    }, 1000);
  } else if (btnName === "btn-left" && index === 0) {
    addAnimation();
    setTimeout(() => {
      nextImage(lastIndex);
      index = lastIndex;
    }, 1000);
  }
  if (btnName === "btn-right" && index < lastIndex) {
    addAnimation();
    setTimeout(() => {
      nextImage(index + 1);
      index++;
    }, 1000);
  } else if (btnName === "btn-right" && index === lastIndex) {
    addAnimation();
    setTimeout(() => {
      nextImage(0);
      index = 0;
    }, 1000);
  }
});