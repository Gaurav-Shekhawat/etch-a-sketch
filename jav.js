let number_of_boxes = 16;
let canvas = document.querySelector(".canvas");
let color_picker = document.getElementById("color-picker");
color_picker.setAttribute("onchange", "colorSchemeNewDivs(this.value)");

let color;

function clearcanvas() {
  let childList = canvas.querySelectorAll("div");
  childList.forEach((child) => {
    child.remove();
  });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorSchemeNewDivs(color_value) {
  const new_divs = canvas.querySelectorAll(".new_divs");

  new_divs.forEach((new_div) => {
    new_div.addEventListener("mouseover", function () {
      new_div.style.backgroundColor = `${color_value}`;
    });
  });
}

function blackCOLOR() {
  colorSchemeNewDivs("black");
}

function randomRGB() {
  const new_divs = canvas.querySelectorAll(".new_divs");

  new_divs.forEach((new_div) => {
    new_div.addEventListener("mouseover", function () {
      new_div.style.backgroundColor = `${getRandomColor()}`;
    });
  });
}

function eraseNow() {
  colorSchemeNewDivs("white");
}

// function greyShade() {
//   if (this.style.backgroundColor === "rgb(0, 0, 0)") {
//     return;
//   }

//   let mystring = this.style.backgroundColor;
//   let length = mystring.length;
//   let new_string = mystring.substring(4, length - 1);
//   let faaltu_array = new_string.split(", ");

//   this.style.backgroundColor = `rgb(${Number(faaltu_array[0]) - 25.5},${
//     Number(faaltu_array[0]) - 25.5
//   }, ${Number(faaltu_array[0]) - 25.5})`;

//   console.log(this.style.backgroundColor);
// }

// function greyFunction() {
//   const new_divs = canvas.querySelectorAll(".new_divs");

//   console.log(this);
//   new_divs.forEach((new_div) => {
//     new_div.addEventListener("mouseover", greyShade);
//   });
// }

function canvas_designer(number_of_boxes) {
  clearcanvas();
  canvas.style.cssText = `display:grid; grid-template-columns : repeat(${number_of_boxes}, 1fr); grid-template-rows : repeat(${number_of_boxes}, 1fr)`;

  for (let i = 1; i <= number_of_boxes; i++) {
    for (let j = 1; j <= number_of_boxes; j++) {
      let new_div = document.createElement("div");
      new_div.classList.add("new_divs");
      canvas.appendChild(new_div);
      new_div.style.cssText = `grid-column : ${i}/${i + 1}; grid-row : ${j}/${
        j + 1
      } ; grid-col`;
    }
  }
  color_picker.value = "#000000";
  const new_divs = canvas.querySelectorAll(".new_divs");

  new_divs.forEach((new_div) => {
    new_div.addEventListener("mouseover", function () {
      new_div.style.backgroundColor = "black";
    });
  });
}

function sliderchange(e) {
  sizeDisplay.textContent = slider.value;
  number_of_boxes = slider.value;
  canvas_designer(number_of_boxes);
}

function randomColor() {
  let colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
  let random_number = Math.floor(6 * Math.random());
  return colors[random_number];
}

let sizeDisplay = document.querySelector(".size-display");
sizeDisplay.style.fontSize = "24px";
let slider = document.getElementById("slider");
sizeDisplay.textContent = slider.value;

slider.setAttribute("oninput", "sliderchange()");

canvas_designer(number_of_boxes);

// function startGrey() {
//   const new_divs = canvas.querySelectorAll(".new_divs");

//   new_divs.forEach((new_div) => {
//     new_div.addEventListener(
//       "mouseover",
//       function () {
//         new_div.style.backgroundColor = "rgb(255, 255, 255)";
//       },
//       false
//     );
//   });

//   greyFunction();
// }

let blackWhite = document.querySelector(".black-white");
//let greyScale = document.querySelector(".grey-scale");
let rainbow = document.querySelector(".rainbow");
let eraser = document.querySelector(".eraser");

blackWhite.addEventListener("click", blackCOLOR);
rainbow.addEventListener("click", randomRGB);
eraser.addEventListener("click", eraseNow);
//greyScale.addEventListener("click", startGrey);
