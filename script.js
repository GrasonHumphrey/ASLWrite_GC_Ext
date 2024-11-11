
var canvas = document.createElement("canvas");
canvas.width = 1080 
canvas.height = 720;
document.body.appendChild(canvas);
canvas.id = "MyCanvas";

var ctx = canvas.getContext("2d");

var xPos = 500;
var yPos = 100;	
var xScale = 0.0625;
var yScale = 0.0625
var flipX = 1;
var flipY = 1;
var rotation = 0;

var cursorX = 100;
var cursorY = 100;


var charDrawn = true;

const xOrigin = 100;
const yOrigin = 100;

var xStart = 100;
var yStart = 100;

var numLines = 0;

var charIndex = 0;
var glyphIndex = 0;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const msg = urlParams.get('msg')

const spaceFull = 150;

// Try 0.9, 0.4
const shiftXBig = 1;
const shiftXSmall = 0.5;
//const shiftYBig = 0.85;
// Try 0.6, 0.4
const shiftYBig = 1;
//const shiftYSmall = 0.5;
const shiftYSmall = 0.33;

const shiftYPixels = 22;

const minYShift = 250;

var curSpace;

//console.log(msg);

document.getElementById("enterButton").addEventListener("click", translateText);
//document.getElementById("inputbox1").addEventListener("input", translateText);

//var selected = getSelectionText();

document.getElementById("inputbox1").value = msg;

translateText();



async function translateText(){
	
	
  var encodedMsg = document.getElementById("inputbox1").value;
  charIndex = 0;
      
  //document.getElementById("p1").innerHTML = encodedMsg.length;
  xStart = xOrigin;
  yStart = yOrigin;
  numLines = 0;
  
  cursorX = xStart;
  cursorY = yStart;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  while (charIndex < encodedMsg.length) {
	//console.log(charIndex);
	rotation = 0;
	cursorY = yStart;

	if (encodedMsg[charIndex] == "a"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/A.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);

		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "A"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/A_2.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);

		cursorX += curSpace;
	}
	  
	else if (encodedMsg[charIndex] == "b"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/B.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "B"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/B_2.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "c"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/C.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "C"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/C_2.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "d"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/d.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "e"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/e.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "f"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/f.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "g"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/g.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "h"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/h.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "i"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/i.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "k"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/k.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "l"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/l.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "m"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/m.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "n"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/n.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "o"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/O.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "s"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/S.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "x"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/x.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "y"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/y.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "1"){
		//console.log(charIndex);
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/1.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "5"){
		//console.log(charIndex);
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/5.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "%"){
		//console.log(charIndex);
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/5_2.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == "."){
		//console.log(charIndex);
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/period.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == ":"){
		const char1 = new Image();
		char1.src = chrome.runtime.getURL("images/colon.png");
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);
		
		cursorX += curSpace;
	}
	
	else if (encodedMsg[charIndex] == " "){
		cursorX += spaceFull * xScale;
	}
	
	else if (encodedMsg[charIndex] == "_"){
		cursorX += 3 * spaceFull * xScale;
	}
	else if (encodedMsg[charIndex] == "<"){
		cursorX -= spaceFull * xScale;
	}
	
	// Direction diacritics need two characters
	else if (encodedMsg[charIndex] == "!"){
		
		if (charIndex + 1 < encodedMsg.length){
			charIndex += 1;
			if (encodedMsg[charIndex] == "z") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Move_Z.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} 
			else if (encodedMsg[charIndex] == "c") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Move_C.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			}
			else if (encodedMsg[charIndex] == ":") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Move_2.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			}
			else if (encodedMsg[charIndex] == "t") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Move_1v.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			}				
			else {
				charIndex -= 1;
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Move_1.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			}
		} else {
			const char1 = new Image();
			char1.src = chrome.runtime.getURL("images/Move_1.png");
			await char1.decode();
			const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
			GetGlyphProps(encodedMsg, char1Glyph);
			DrawGlyph(ctx, char1, char1Glyph);
		
			cursorX += curSpace;
		}
		
	}
	
	// Body diacritics need two characters
	else if (encodedMsg[charIndex] == "["){
		
		if (charIndex + 1 < encodedMsg.length){
			charIndex += 1;
			if (encodedMsg[charIndex] == "s") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Shoulder.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} else if (encodedMsg[charIndex] == "a") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Arm.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} else {
				charIndex -= 1;
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Shoulder.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			}
		} else {
			const char1 = new Image();
			char1.src = chrome.runtime.getURL("images/Shoulder.png");
			await char1.decode();
			const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
			GetGlyphProps(encodedMsg, char1Glyph);
			DrawGlyph(ctx, char1, char1Glyph);
		
			cursorX += curSpace;
		}
		
	}
	
	// Head diacritics need two characters
  else if (encodedMsg[charIndex] == "}"){
		
		if (charIndex + 1 < encodedMsg.length){
			charIndex += 1;
			if (encodedMsg[charIndex] == "o") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Head_Side_Full.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} 
			else if (encodedMsg[charIndex] == "~") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Head_Half.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} 
			else if (encodedMsg[charIndex] == "]") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Torso.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} 
			else {
				charIndex -= 1;
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Head_Side_Full.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
				cursorX += curSpace;
			}
		} else {
			const char1 = new Image();
			char1.src = chrome.runtime.getURL("images/Head_Side_Full.png");
			await char1.decode();
			const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
			GetGlyphProps(encodedMsg, char1Glyph);
			DrawGlyph(ctx, char1, char1Glyph);
			cursorX += curSpace;
		}
	}
	
	// Movement diacritics need two characters
	else if (encodedMsg[charIndex] == "@"){
		
		if (charIndex + 1 < encodedMsg.length){
			charIndex += 1;
			if (encodedMsg[charIndex] == "o") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Rotation.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} 
			else if (encodedMsg[charIndex] == "p") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/bar.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} 
			else if (encodedMsg[charIndex] == "c") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Hinge.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			}
			else if (encodedMsg[charIndex] == "s") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Rattle.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			}
			else if (encodedMsg[charIndex] == "w") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/Flutter.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			}
			else {
				charIndex -= 1;
			}
		} else {
			
		}
	}
	
	// Extramanual markers need two characters
	else if (encodedMsg[charIndex] == "#"){
		
		if (charIndex + 1 < encodedMsg.length){
			charIndex += 1;
			if (encodedMsg[charIndex] == "p") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/EMM_PressedLips.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} else if (encodedMsg[charIndex] == "o") {
				const char1 = new Image();
				char1.src = chrome.runtime.getURL("images/EMM_OpenMouth.png");
				await char1.decode();
				const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
				GetGlyphProps(encodedMsg, char1Glyph);
				DrawGlyph(ctx, char1, char1Glyph);
		
				cursorX += curSpace;
			} else {
				charIndex -= 1;
			}
		} else {
			
		}
	}
	
	
	else if (encodedMsg[charIndex] == "\n"){
		numLines += 1;
		cursorX = xOrigin;
		cursorY = yOrigin + numLines * shiftYPixels * 4;
		xStart = cursorX;
		yStart = cursorY;
	}
	
	charIndex += 1;
  }
}

function GetGlyphProps(msg, glyph) {
	while (charIndex + 1 < msg.length) {
		charIndex += 1;
		var fullH = Math.abs(glyph.width * Math.sin(glyph.rotation)) + Math.abs(glyph.height * Math.cos(glyph.rotation));
		var fullW = Math.abs(glyph.width * Math.cos(glyph.rotation)) + Math.abs(glyph.height * Math.sin(glyph.rotation));
		
		switch (msg[charIndex]) {
			case "0": glyph.rotation = 0; break;
			case "1": glyph.rotation = 0.25*Math.PI; break;
			case "2": glyph.rotation = 0.5*Math.PI; break;
			case "3": glyph.rotation = 0.75*Math.PI; break;
			case "4": glyph.rotation = Math.PI; break;
			case "5": glyph.rotation = 1.25*Math.PI; break;
			case "6": glyph.rotation = 1.5*Math.PI; break;
			case "7": glyph.rotation = 1.75*Math.PI; break;
			
			case "/": glyph.flipX = -1; break;
			
			case ",":
				// cursorY += shiftYBig * Math.max(fullH, minYShift) * yScale;
				cursorY += shiftYPixels * shiftYBig;
				break;
			case ".":
				// cursorY += shiftYSmall * Math.max(fullH, minYShift) * yScale;
				cursorY += shiftYPixels * shiftYSmall;
				break;
			case ";":
				//cursorY -= shiftYSmall * Math.max(fullH, minYShift) * yScale;
				cursorY -= shiftYPixels * shiftYSmall;
				break;
			case "'":
				//cursorY -= shiftYBig * Math.max(fullH, minYShift) * yScale;
				cursorY -= shiftYPixels * shiftXBig;
				break;
			
			case " ":
				
				//curSpace = (glyph.width + spaceFull) * xScale;
				curSpace = (fullW + spaceFull) * xScale;
				return;
			case "<":
				curSpace = -1 * spaceFull * xScale;
				return;
			case "=":
				//curSpace = shiftXBig * glyph.width * xScale;
				curSpace = shiftXBig * fullW * xScale;
				return;
			case "-":
				//curSpace = shiftXSmall * glyph.width * xScale;
				curSpace = shiftXSmall * fullW * xScale;
				return;
			case "|":
				curSpace = 0;
				return;
			default:
				//curSpace = (glyph.width + spaceFull) * xScale;
				curSpace = (fullW + spaceFull) * xScale;
				charIndex -= 1;
				return;
		}
	}
}

function DrawGlyph(ctx, img, glyph){
	ctx.save();
	//console.log(cursorX);
	var fullW = Math.abs(img.width * Math.cos(glyph.rotation)) + Math.abs(img.height * Math.sin(glyph.rotation));
	var fullH = Math.abs(img.width * Math.sin(glyph.rotation)) + Math.abs(img.height * Math.cos(glyph.rotation));
	console.log(fullW);
	//ctx.setTransform(glyph.xScale*glyph.flipX, 0, 0, glyph.yScale*glyph.flipY, cursorX+img.width*xScale/2, cursorY); // sets scales and origin
	ctx.setTransform(glyph.xScale*glyph.flipX, 0, 0, glyph.yScale*glyph.flipY, cursorX+fullW*glyph.xScale/2, cursorY); // sets scales and origin
	ctx.rotate(glyph.rotation*glyph.flipX);
	//ctx.drawImage(img, -img.width/2, -img.height/2);
	ctx.drawImage(img, -img.width/2, -img.height/2);
	ctx.restore();
}

function Glyph(xScale, yScale, flipX, flipY, width, height, rotation) {
  this.xScale = xScale;
  this.yScale = yScale;
  this.flipX = flipX;
  this.flipY = flipY;
  this.width = width;
  this.height = height;
  this.rotation = rotation;
}