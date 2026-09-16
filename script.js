let applyBtn = document.querySelector("#applyBtn");
let randomBtn = document.querySelector("#randomBtn");
let currentColor = document.querySelector("#currentColor");
let text = document.querySelector("#text");
let container = document.querySelector(".container");

const colorChange = (color) => {
  container.style.backgroundColor = color;
  currentColor.innerText = color;
};
const colorsArr = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "navy",
  "teal",
  "maroon",
  "olive",
  "gold",
  "silver",
  "violet",
];

const genarateRandomColor = () => {
  let val = Math.floor(Math.random() * colorsArr.length);
  return colorsArr[val];
};
const applyBtnHandle = () => {
  colorChange(text.value);
};
applyBtn.addEventListener("click", applyBtnHandle);

const randomBtnHandle = () => {
  colorChange(genarateRandomColor());
};
randomBtn.addEventListener("click", randomBtnHandle);
