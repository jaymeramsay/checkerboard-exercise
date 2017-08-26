window.onload = function () {
  myCode();
}

function myCode() {
  console.log('booyah');
}
//create element
let square;
let container;
for (let i = 0; i < 63; i++) {
  // make it look like a square
  square = document.createElement('div');
  square.addEventListener('click', function (ev) {
    console.log(ev.target);
    console.log('HEY I WAS CLICKED');
    console.log(square);

  })
  if (i % 2 === 0) {
    decorateSquare(square, "tomato");
  }
  else {
    decorateSquare(square, "black");
  }

  container = document.getElementsByTagName('body')[0];
  //add it to the DOM
  //find something to append to
  //append to that thing
  container.append(square);
}

function decorateSquare(sq, color) {
  sq.style.width = "11.1%";
  sq.style.paddingBottom = "11.1%";
  sq.style.backgroundColor = color;
  // sq.style.border = "1px solid white";
  sq.style.float = "left";
}



console.log(square);
