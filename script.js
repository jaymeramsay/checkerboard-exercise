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

//create function to actually decorate the squares in JS. NOT CSS!
function decorateSquare(sq, color) {
  sq.style.width = "11.1%";
  sq.style.paddingBottom = "11.1%";
  sq.style.float = "left";
  sq.style.display = "inlineblock";
  sq.style.background = 'linear-gradient(45deg, red, blue)'
}
