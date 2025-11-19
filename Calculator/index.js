const display = document.getElementById("display");

function appendToDisplay(input){
   display.value += input;
}
function calculate(){
  
  try {
   display.value = eval(display.value);
      }
    catch (error) {
        display.value = "Error";
    }
}
function ClearDisplay_one(){
   display.value = display.value.substring(0, display.value.length - 1 );
}
function ClearDisplay(){
   display.value = "";
}
