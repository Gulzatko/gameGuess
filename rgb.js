let square = document.querySelectorAll(".square");
let color=[];
let reset = document.querySelector("#reset");
let winColor, winIndex, goal, header;
let message = document.querySelector("#message");
let numSquare = 6;
let body = document.querySelector("body");
body.style.backgroundColor ="#232323";
setSqaureColor(numSquare);

 for(let i=0;i<square.length; i++){ //anytime a square is clicked 
    square[i].addEventListener("click", function(){
        if(winColor == this.style.backgroundColor)
        convertAll(winColor);
     else{
        this.style.backgroundColor = body.style.backgroundColor
        message.textContent ="Try again";
     }
    })
 }
 
  function rgbGen(){
     // generate the three colour strems 
    var red = Math.floor(Math.random()*
    (256));
    var green=Math.floor(Math.random()*(256));
    var blue = Math.floor(Math.random()*(256));
    var genColor ="rgb(" + red.toString()+ "," + green.toString()+ "," +blue.toString()+ ")";
    return genColor;

 }
 //triggered when you win 

 function convertAll(){
    let header=document.querySelector("header");
     for (let i=0; i<square.length; i++)
     {
        square[i].style.backgroundColor=winColor.toString();
        header.style.backgroundColor=winColor.toString();
        reset.textContent="Play Again?";
        message.textContent="Correct!"
     }
 }

 function setSqaureColor(numSquare){
    header = document.querySelector("header");
    header.style.backgroundColor="steelblue";
    color.length=numSquare;
    // generating 6 colours
    for(let i=0; i<numSquare;i++){
        color[i]=rgbGen();
    }
    //setting the 6 colours to the squares
    for(var i=0; i<numSquare;i++)
    {
        square[i].style.backgroundColor = color[i].toString();
    }

    winIndex=Math.floor(Math.random()*(color.length));
    goal = document.querySelector("#goal");
    goal.textContent = color[winIndex]; //setting the array 
    winColor=color[winIndex];// setting the colour 
    message.textContent="";

 }

 reset.addEventListener("click", function()
 {
    setSqaureColor(numSquare);
    reset.textContent="New Colors";
 });