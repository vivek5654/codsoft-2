const display = documnet.getElementById("Display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
    

}
function calculate(){
    display.value = eval(display.value)
}