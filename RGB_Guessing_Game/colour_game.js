var numSquares = 6;
var colours = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColor();
var colourDisp = document.getElementById('colourDisp');
var messageDisp = document.getElementById('message');
var h1 = document.querySelector("h1");
var reset = document.getElementById('reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
//-----------------------------------------------------------------------
colourDisp.textContent = pickedColour;
//-----------------------------------------------------------------------
//easy & hard btn configuration
easyBtn.addEventListener('click',function(){
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    numSquares = 3;
    //adding easy mode colour pallette(3)
    colours = generateRandomColors(numSquares);
    pickedColour = pickColor();
    colourDisp.textContent = pickedColour;
    for(var i = 0; i<squares.length; i++){
        if(colours[i]){
            squares[i].style.backgroundColor = colours[i];
        }else{
            squares[i].style.display = 'none';
        }
    }
});
hardBtn.addEventListener('click',function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');  
    numSquares=6;
    colours = generateRandomColors(numSquares);
    pickedColour = pickColor();
    colourDisp.textContent = pickedColour;
    for(var i = 0; i<squares.length; i++){
            squares[i].style.backgroundColor = colours[i];
            squares[i].style.display = 'block';
        
    } 
});
//-----------------------------------------------------------------------

//button to reset colors 'Play Again'
reset.addEventListener('click',function(){
   //Generate all new colours 
   colours=generateRandomColors(numSquares);
   //pick anew random colours
   pickedColour=pickColor();
   //change colourDisp to matched color
   colourDisp.textContent=pickedColour;
   this.textContent = 'New Colours';

   messageDisp.textContent="";
   //change cpolours of squares
   for(var i=0; i < squares.length; i++){
       squares[i].style.backgroundColor = colours[i];
       h1.style.backgroundColor = 'steeleblue';
    }

});
//-----------------------------------------------------------------------

for(var i  = 0; i < squares.length; i++){
    //add initial colours to all the Squares
    squares[i].style.backgroundColor = colours[i];
    //Add click listners to all squares
    squares[i].addEventListener('click',function(){
        //Grab colour of clicked Square
        var clickedColour = this.style.backgroundColor;
        //Compare that colour to pickedColour
        if (clickedColour === pickedColour) {
            messageDisp.textContent = 'WELL DONE Kiddo';
            reset.textContent = 'Play Again?';
            
            changeColour(clickedColour);
            h1.style.backgroundColor = clickedColour;
        }else{
            this.style.backgroundColor = '#232323';
            messageDisp.textContent = "TRY AGAIN Kiddo!";
        }
    });
}
//-----------------------------------------------------------------------

function changeColour(color) {
    //loop through all squares
    for(var i = 0; i < colours.length; i++){
        //change each color to match to given color
        squares[i].style.backgroundColor = color;
    }
    
};
//-----------------------------------------------------------------------

function pickColor(){
    var random = Math.floor( Math.random() * colours.length);
    return colours[random];
}
//-----------------------------------------------------------------------

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to an array
    for(var i = 0; i< num; i++){
        //get random color and push'em to array
        arr.push(randomColors());
    };
    //return the array
    return arr;
}
//-----------------------------------------------------------------------

function randomColors() {
    //pick a "red" from 0-255
   var r=  Math.floor(Math.random() * 256);
   //pick a "green" from 0-255
   var g=  Math.floor(Math.random() * 256);
   //pick a "blue" from 0-255
   var b=  Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";    
}