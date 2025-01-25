
const colorInput = document.querySelector(".colorNameField");
const changeColorButton = document.querySelector(".changeColorButton");
const BoxToColor = document.querySelector(".BoxColor");
const CycleButton = document.querySelector(".Cycle");
const CycleDelayValue = document.querySelector(".CycleDelayValue");
const CycleStepValue = document.querySelector(".CycleStepValue");
const CycleButtonFunctionDelayButton = document.querySelector(".CycleButtonFunctionDelayButton");
const CycleButtonFunctionStepButton = document.querySelector(".CycleButtonFunctionStepButton");
const StopCycle = document.querySelector('.StopCycle');


/*
# 11 22 33 44 
11 red
22 green
33 blue
44 opacity
*/ 

//  USER! do not touch default values
let CycleButtonFunctionDelay = 1; //default values
let CycleButtonFunctionStep = 10;

const listOfColors = {
  green: [0,255,0],
  red: [255,0,0],
  blue: [0,0,255]
}


function changeBoxColorTo(color){
  r = color[0];
  g = color[1];
  b = color[2];
  BoxToColor.style.backgroundColor = `rgb(${r},${g},${b})`;
}

let isCycleButtonFunctionCycling = false;
async function CycleButtonFunction(delay, step){
  let color = [0,0,0];
  //loop through the colors and change one color value individually
  isCycleButtonFunctionCycling = true;
  for(let i = 0; i < color.length; i++){
    let end = true;
    let direction = true;
    while(end && isCycleButtonFunctionCycling){

      //changes the adding direction.
      if(color[i] > 255 || color[i] < 0){
        direction = !direction; //flips direction
      }

      //updating the current color
      color[i] += direction ? step:(step * -1);
      
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

changeColorButton.addEventListener("click", function () {
const color = colorInput.value;
if(listOfColors[color] == null){
  return;
}
changeBoxColorTo(listOfColors[color]);
});

CycleButtonFunctionDelayButton.addEventListener("click", function(){
  try{
    CycleButtonFunctionDelay = Number(CycleDelayValue.value);
  }catch(err){
    console.log("cannot convert Delay value to number");
  }
  console.log("CycleButtonFunctionDelay: " + CycleButtonFunctionDelay);
})

CycleButtonFunctionStepButton.addEventListener("click", function(){
  try{
    CycleButtonFunctionStep = Number(CycleStepValue.value);
  }catch(err){
    console.log("cannot convert Step value to number");
  }
  console.log("CycleButtonFunctionStep: " + CycleButtonFunctionStep);
})

CycleButton.addEventListener("click", function() {
  CycleButtonFunction(CycleButtonFunctionDelay, CycleButtonFunctionStep);
});

StopCycle.addEventListener("click", function(){
  isCycleButtonFunctionCycling = false;
  changeBoxColorTo([0,0,0]);
})







