const clickMe = document.getElementById("click-me-button");
const text = document.getElementById("text");
const header = document.getElementById("header");
const input = document.getElementById("inputField");
const addToList = document.querySelector(".add-to-list");


const list = ["1", "2", "3"]; 
let count = 0;

function Update(){

  let content = "";
  for(let i = 0; i < list.length; i++){
    content += list[i] + " "
  }

  header.textContent = content;
}

Update();




clickMe.addEventListener('click', function (e) {
  text.textContent = list[count % list.length];
  count++;
  Update();
});

input.addEventListener("keydown", function (e){
  
  if(e.key != "Enter"){
    return;
  }
  if(input.value == list[list.length -1]){
    return;
  }

  list.push(input.value);
  Update();
});

addToList.addEventListener("click", function (e){
  
  console.log("addToList clicked.");

  input.value.trim();
  if(e.key != "Enter" && input.value == list[list.length -1]){
    return;
  }

  list.push(input.value);
  Update();
});





