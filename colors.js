const orangeBtn = document.querySelector('div.orange');
const greenBtn = document.querySelector('div.green');
const blueBtn = document.querySelector('div.blue');
const yellowBtn = document.querySelector('div.yellow');
const redBtn = document.querySelector('div.red');

function orangeColor() { 
    document.body.classList.remove("orange", "green", "blue", "yellow", "red");
  document.body.classList.add("orange");
 }
 orangeBtn.addEventListener("click", orangeColor);


 function greenColor() {  
    document.body.classList.remove("orange", "green", "blue", "yellow", "red");
    document.body.classList.add("green");
   }
   greenBtn.addEventListener("click", greenColor);

   function blueColor() {   
    document.body.classList.remove("orange", "green", "blue", "yellow", "red");
    document.body.classList.add("blue");
   }
   blueBtn.addEventListener("click", blueColor);

   function yellowColor() {  
    document.body.classList.remove("orange", "green", "blue", "yellow", "red");
    document.body.classList.add("yellow");
   }
   yellowBtn.addEventListener("click", yellowColor);

   function redColor() {  
    document.body.classList.remove("orange", "green", "blue", "yellow", "red");
    document.body.classList.add("red");
   }
   redBtn.addEventListener("click", redColor);
 