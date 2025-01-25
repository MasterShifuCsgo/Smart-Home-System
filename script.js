
const colorInput = document.querySelector(".colorNameField");
const changeColorButton = document.querySelector(".changeColorButton");
const BoxToColor = document.querySelector(".BoxColor");
const CycleButton = document.querySelector(".Cycle");

/*
# 11 22 33 44 
11 red
22 green
33 blue
44 opacity
*/ 

const decimaltoHexTable = {
  0:"0",
  1:"1",
  2:"2",
  3:"3",
  4:"4",
  5:"5",
  6:"6",
  7:"7",
  8:"8",
  9:"9",
  10:"A",
  11:"B",
  12:"C",
  13:"D",
  14:"E",
  15:"F"
};

let delay = 0.01;
let color = [0,0,0];
function changeBoxColorTo(color){
  r = color[0];
  g = color[1];
  b = color[2];
  BoxToColor.style.backgroundColor = `rgb(${r},${g},${b})`;
}

const listOfColors = {
  green: "#00FF00FF",
  blue: "#0000FFFF",
  red: "#FF0000FF"
}

changeColorButton.addEventListener("click", function () {

const color = colorInput.value;
if(listOfColors[color] == null){
  return;
}

changeBoxColorTo(listOfColors[color]);
});

function MakeAllColorsSame(value, color){
  for(let i = 0; i < color.length; i++){
    color[i] = value;
  }
}

async function CycleButtonFunction(delay){
  //loop through the colors and change one color value individually
  for(let i = 0; i < color.length; i++){
    let end = true;
    let direction = true;
    while(end){

      //changes the adding direction.
      if(color[i] > 255 || color[i] < 0){
        direction = !direction; //flips direction
      }

      //updating the current color
      color[i] += direction ? 1:-1;
      
      //changing box color
      changeBoxColorTo(color);

      //ending loop if color reaches back to 0
      if(color[i] === 0){
        end = false;
      }

      //adding a delay in the while loop
      await new Promise((resolve) => setTimeout(resolve, delay)); 
    }
  }
};

CycleButton.addEventListener("click", function() {
  CycleButtonFunction(delay);
});





