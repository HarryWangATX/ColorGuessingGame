var numSquares = 6;
var colors = generateColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var colorDis = document.querySelector("#randomColor");
var header = document.querySelector("h1");
var resetBtn = document.querySelector("#newOrReset");
var ezBtn = document.querySelector("#easy");
var hdBtn = document.querySelector("#hard");

colorDis.textContent = pickedColor.toUpperCase();

ezBtn.addEventListener("click", function(){
    hdBtn.classList.remove("selected");
    ezBtn.classList.add("selected");
    numSquares = 3;
    reset();
});

hdBtn.addEventListener("click", function(){
    hdBtn.classList.add("selected");
    ezBtn.classList.remove("selected");
    header.style.backgroundColor = "steelblue";
    numSquares = 6;
    reset();
});


resetBtn.addEventListener("click", function(){
    reset();
});


for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent = "Correct";
            changeAllColor();
            resetBtn.textContent = "Play Again?";
            header.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}


function changeAllColor(){
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(num){
    var listC = [];
    for(var i = 0; i<num; i++){
        listC[i] = generateRandomColor();
    }
    return listC;
}

function generateRandomColor(){
    var first = Math.floor(Math.random() * 256);
    var second = Math.floor(Math.random() * 256);
    var third = Math.floor(Math.random() * 256);
    var rgbS = "rgb(" + first + ", " + second + ", " + third + ")";
    return rgbS;
}


function reset(){
    resetBtn.textContent = "New Colors?";
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    message.textContent = "";
    colorDis.textContent = pickedColor.toUpperCase();
    header.style.backgroundColor = "steelblue";
    for(var i = 0; i<squares.length; i++){
        if(!colors[i]){
            squares[i].style.display = "none";
            continue;
        }
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
}