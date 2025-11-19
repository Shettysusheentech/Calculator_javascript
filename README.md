# Calculator_javascript
we use html, css and javascript for this calculator
In HTML we first create a div id named as calculator where we put input id named as "display" alos we use readonly to make sure that we dont write anything in the display
And then later we create an another id named as keys
later we use the button element inside the button element we use onclick to which we use the appendTodisplay function and then numbering in order for the calcuator this will go on upto 14 more times
then we close the div tag of both keys and calculator
and to connect the javascript we use the  <script src="./index.js"></script>
Later 
Now we use the external css
where we use the calculator id and give height,width,background-color,margin,border-radius,box-shadow,padding,max-width 
and then it goes on to the display id,keys id,button class and also to make it more unique we use the function hover where we go near the button and then the color changes
Next in Javascript
the first line is const display(display is the id name of the container) = document.getElementById("display")
now we will craete three functions one to add numbers that will be appendToDisplay where we input and then using the id named display where we concatenate using .value +=input
And to later calculate we use the function display.value = eval(display.value)
we then for all clearing we use display.value = "";
and to deleting one after the other element we use display.value = display.value.substring(0, display.value.length - 1 );
