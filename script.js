
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


function changeBoxColorTo(color){
  BoxToColor.style.backgroundColor = color
}
  
function decimalToHex(pattern){

  //convert into binary.
  

}
const listOfColors = {
  green: "#00FF00FF",
  blue: "#0000FFFF",
  red: "#FF0000FF"
}

changeColorButton.addEventListener("click", function () {

const color = colorInput.value;
console.log(color);
if(listOfColors[color] == null){
  return;
}
changeBoxColorTo(listOfColors[color]);
});



CycleButton.addEventListener("click", function (){

  let color= {
    1:255,
    2:255,
    3:255
  };
  while(true){

    changeBoxColorTo(decimalToHex(color));
    setTimeout(100);
  }
});



