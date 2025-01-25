
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

let direction = true;
function addOneToColor(colorValue){
  if(colorValue > 255){
    direction = false;
  }else if(colorValue < 0){
    direction = true;
  }
  if(direction){
    colorValue++;
  }else{
    colorValue--;
  }
  return colorValue
}

let color = [0,0,0];

let num = 255*2;
function CycleButtonFunction(){
for(let i = 0; i < color.length; i++){
  while(num > 0){
    color[i] = addOneToColor(color[i]);
    num--;
  }
  num = 255*2;
}
  //MakeAllColorsSame(colorValue, color)
  changeBoxColorTo(color);
};

CycleButton.addEventListener("click", function() {
  setInterval(CycleButtonFunction, 1);
});





