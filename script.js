let applyBtn = document.querySelector("#applyBtn");
let randomBtn = document.querySelector("#randomBtn");
let currentColor = document.querySelector("#currentColor");
let text = document.querySelector("#text");
let container = document.querySelector(".container");

const colorChange = (color) => {
  container.style.backgroundColor = color;
  currentColor.innerText = color;
};

const applyBtnHandle = () => {
  console.log(text.value);
  colorChange(text.value);
};
applyBtn.addEventListener("click", applyBtnHandle);

const randomBtnHandle = () => {
  console.log("random btn");
};
randomBtn.addEventListener("click", randomBtnHandle);
