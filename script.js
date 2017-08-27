window.onload = function () {}

//create container element to hold all of my squares
let container = document.getElementsByTagName('body')[0];

//generate square divs
for (let i = 0; i < 63; i++) {
  // make square divs
  let square = document.createElement('div');
  //append them to the container
  container.appendChild(square);
  //decorate them within the loop so they can all change at once. no need to create a second, separate for loop
  decorateSquare(square);
}

function changeColors(sq) {
  let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  sq.style.backgroundColor = hue;
}

//create function to actually decorate the squares in JS. NOT CSS!
function decorateSquare(sq, color) {
  sq.style.width = "11.1%";
  sq.style.paddingBottom = "11.1%";
  sq.style.float = "left";
  sq.style.display = "inlineblock";
  sq.style.background = changeColors(sq);
  window.setInterval(changeColors, 2000, sq);
}

let audio = new Audio('http://cdn.anything2mp3.com/system/files/mp3/Planet%20Claire%20%28original%20by%20%27The%20B52%27s%27%29_185254497_soundcloud.mp3');
audio.play();
