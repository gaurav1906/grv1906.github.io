// alert("Connected");
// var colors = ["rgb(255, 0, 0)",
// 			  "rgb(255, 255, 0)",
// 			  "rgb(0, 255, 0)",
// 			  "rgb(0, 255, 255)",
// 			  "rgb(0, 0, 255)",
// 			  "rgb(255, 0, 255)"
// 			  ];

var numSquare = 6;
var colors = generateRandomColor(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor("colors");
var colorDisplay = document.getElementById("rgb");
var msgDisp = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	// 
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquare = 3;
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i <squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";
	resetBtn.textContent = "New color !"
	
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquare = 6
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i <squares.length; i++) {
	    squares[i].style.background = colors[i];
	    squares[i].style.display = "block";
	}
	h1.style.background = "steelblue";
	resetBtn.textContent = "New color !"
	
});

resetBtn.addEventListener("click", function(){
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	msgDisp.textContent = "";
	for (var i = 0; i <squares.length; i++) {
	    squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	resetBtn.textContent = "New color !"
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors tosquares
	squares[i].style.background = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to the pickedColor
		if(clickedColor === pickedColor){
			// alert("Correct!");
			msgDisp.textContent = "Correct !";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetBtn.textContent = "Play Again!"
		}else{
			// alert("Wrong!");
			this.style.background = "#232323";
			msgDisp.textContent = "try Again";
		}
	});
}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}
function pickColor(){
	 var random = Math.floor(Math.random() * colors.length) ;
	 return colors[random];
} 

function generateRandomColor(num){
	//make an array
	var arr = [];
	for (var i = 0; i < num; i++) {
		//get random color
		arr.push(randomColor());
	}
	//return the Array	
	return arr;
}
function randomColor(){
	//pick a "Red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "Green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "Blue" from 0-255
	var b = Math.floor(Math.random()*256);
	// "rgb(r, g, b)";
	return "rgb(" + r + ", " + g +", " + b +")";
}