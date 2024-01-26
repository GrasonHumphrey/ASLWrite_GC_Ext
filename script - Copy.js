
var canvas = document.createElement("canvas");
canvas.width = 720 
canvas.height = 500;
document.body.appendChild(canvas);
canvas.id = "MyCanvas";

var ctx = canvas.getContext("2d");

var xPos = 500;
var yPos = 100;	
var xScale = 0.05;
var yScale = 0.05
var flipX = 1;
var flipY = 1;
var rotation = 0;


var charDrawn = true;

const xStart = 100;
const yStart = 100;



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const msg = urlParams.get('msg')

console.log(msg);

document.getElementById("enterButton").addEventListener("click", translateText);

//var selected = getSelectionText();

document.getElementById("inputbox1").value = msg;

translateText();


function translateText(){
  var encodedMsg = document.getElementById("inputbox1").value;
  var charIndex = 0;
  var glyphIndex = 0;
  
  var glyphArr = [];
    
  document.getElementById("p1").innerHTML = encodedMsg.length;
  xPos = xStart;
  yPos = yStart;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  while (charIndex < encodedMsg.length) {
	console.log(charIndex);
		if (encodedMsg[charIndex] == "a"){
			charDrawn = false;
			const char1 = new Image();
			const char1Glyph = new Glyph(xPos, yPos, xScale, yScale, flipX, flipY, rotation, char1);
			glyphArr.push(char1Glyph);
			char1.onload = function (event) {
				const curGlyph = glyphArr[glyphIndex];
				glyphIndex += 1;
				ctx.save();
				console.log(curGlyph.xPos);
				ctx.setTransform(curGlyph.xScale*curGlyph.flipX, 0, 0, curGlyph.yScale*curGlyph.flipY, curGlyph.xPos, curGlyph.yPos); // sets scales and origin
				ctx.rotate(curGlyph.rotation*Math.PI/180);
				ctx.drawImage(curGlyph.img, -curGlyph.img.width/2, -curGlyph.img.height/2);
				ctx.restore();
			}
			char1.src = chrome.runtime.getURL("images/A.png");
			//xPos += char1.width*xScale;
			xPos += 35;
		}
		  
		if (encodedMsg[charIndex] == "b"){
			charDrawn = false;
			const char1 = new Image();
			const char1Glyph = new Glyph(xPos, yPos, xScale, yScale, flipX, flipY, rotation, char1);
			glyphArr.push(char1Glyph);
			char1.onload = function (event) {
				const curGlyph = glyphArr[glyphIndex];
				glyphIndex += 1;
				ctx.save();
				console.log(curGlyph.xPos);
				ctx.setTransform(curGlyph.xScale*curGlyph.flipX, 0, 0, curGlyph.yScale*curGlyph.flipY, curGlyph.xPos, curGlyph.yPos); // sets scales and origin
				ctx.rotate(curGlyph.rotation*Math.PI/180);
				ctx.drawImage(curGlyph.img, -curGlyph.img.width/2, -curGlyph.img.height/2);
				ctx.restore();
			}
			char1.src = chrome.runtime.getURL("images/B.png");
			//xPos += char1.width*xScale;
			xPos += 35;
		}
		charIndex += 1;
  }
}

function Glyph(xPos, yPos, xScale, yScale, flipX, flipY, rotation, img) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.xScale = xScale;
  this.yScale = yScale;
  this.flipX = flipX;
  this.flipY = flipY;
  this.rotation = rotation;
  this.img = img;
}