document.addEventListener("DOMContentLoaded", function() {
    drawBorder();
});


// find our buttons and add eventListers to them

var buttons = document.getElementsByTagName('button')

for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        if(this.id === "clear") {
            clearCanvas();
        } else {
            drawRectangle(this.id);
        }
    });
}



function clearCanvas() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBorder();
}

// this function draws random sized boxes within the entire canvas
function drawRectangle(color) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var randomX = Math.floor(Math.random() * (250 - 1 + 1)) +1;
    var randomY = Math.floor(Math.random() * (250 - 1 + 1)) +1;
    randomHeight = Math.floor(Math.random() * (100 - 10 + 1)) + 1;
    randomWidth = Math.floor(Math.random() * (100 - 10 + 1)) + 1;
        context.fillStyle = color
        context.fillRect(randomX, randomY, randomWidth, randomHeight);
}

// this function draws in only one place on the canvas
// function drawRectangle(color) {
//     var canvas = document.getElementById("canvas");
//     var context = canvas.getContext('2d');
//         context.fillStyle = color
//         context.fillRect(canvas.width/2, canvas.height/2, canvas.width, canvas.height)
// }




function drawBorder(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var size = { x: canvas.width, y: canvas.height }





    context.strokeStyle = "blue";
    context.strokeRect(0,0, size.x, size.y);
}





for (var i=1; i <= 20; i++) {
    if (i % 15 == 0)
      console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}