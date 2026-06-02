
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


const singleChars = {
	a: "images/a.png",
	A: "images/a_2.png",
	b: "images/b.png",
	B: "images/b_2.png",
	c: "images/c.png",
	C: "images/c_2.png",
	d: "images/d.png",
	e: "images/e.png",
	f: "images/f.png",
	g: "images/g.png",
	h: "images/h.png",
	i: "images/i.png",
	k: "images/k.png",
	l: "images/l.png",
	m: "images/m.png",
	n: "images/n.png",
	o: "images/o.png",
	p: "images/p.png",
	q: "images/q.png",
	r: "images/r.png",
	s: "images/s.png",
	t: "images/t.png",
	u: "images/u.png",
	v: "images/v.png",
	w: "images/w.png",
	W: "images/w_2.png",
	x: "images/x.png",
	y: "images/y.png",
	1: "images/1.png",
	2: "images/2.png",
	5: "images/5.png",
	6: "images/w.png",
	"%": "images/5_2.png",
	".": "images/period.png",
	":": "images/colon.png"
};

const spaceChars = {
	" ": 1,
	"_": 3,
	"<": -1
};

const directionChars = {
	z: "images/Move_z.png",
	c: "images/Move_c.png",
	C: "images/Move_c2.png",
	":": "images/Move_2.png",
	t: "images/Move_1v.png",
	T: "images/Move_1v2.png",
	u: "images/Move_cv.png",
	U: "images/Move_cv2.png",
	r: "images/Move_rock.png",
	R: "images/Move_rock2.png",
	blank: "images/Move_1.png"
};

const bodyChars = {
	s: "images/Shoulder.png",
	a: "images/Arm.png",
	u: "images/Head_Front_Half.png",
	blank: "images/Shoulder.png"
};

const headChars = {
	o: "images/Head_Side_Full.png",
	"~": "images/Head_Half.png",
	"]": "images/Torso.png",
	blank: "images/Head_Side_Full.png"
};

const moveChars = {
	o: "images/Rotation.png",
	p: "images/bar.png",
	c: "images/Hinge.png",
	s: "images/Rattle.png",
	w: "images/Flutter.png",
	blank: "images/Rotation.png"
};

const emmChars = {
	p: "images/EMM_PressedLips.png",
	o: "images/EMM_OpenMouth.png",
	blank: "images/EMM_PressedLips.png"
};


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

	// Print single chars
	if (encodedMsg[charIndex] in singleChars){
		//console.log("Found char in dictionary: " + singleChars[encodedMsg[charIndex]]);

		const char1 = new Image();
		char1.src = chrome.runtime.getURL(singleChars[encodedMsg[charIndex]]);
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);

		cursorX += curSpace;
	}

	// Print spacing chars
	else if (encodedMsg[charIndex] in spaceChars){
		cursorX += spaceChars[encodedMsg[charIndex]] * spaceFull * xScale;
	}

	// Print direction chars
	else if (encodedMsg[charIndex] == "!"){
		if (charIndex + 1 < encodedMsg.length){
			if (encodedMsg[charIndex+1] in directionChars)
			{
				charIndex += 1;
			}
		}
		const char1 = new Image();
		char1.src = chrome.runtime.getURL(directionChars[encodedMsg[charIndex]] || directionChars["blank"]);
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);

		cursorX += curSpace;
	}

	// Print body chars
	else if (encodedMsg[charIndex] == "["){
		if (charIndex + 1 < encodedMsg.length){
			if (encodedMsg[charIndex+1] in bodyChars)
			{
				charIndex += 1;
			}
		}
		const char1 = new Image();
		char1.src = chrome.runtime.getURL(bodyChars[encodedMsg[charIndex]] || bodyChars["blank"]);
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);

		cursorX += curSpace;
	}

	// Print head chars
	else if (encodedMsg[charIndex] == "}"){
		if (charIndex + 1 < encodedMsg.length){
			if (encodedMsg[charIndex+1] in headChars)
			{
				charIndex += 1;
			}
		}
		const char1 = new Image();
		char1.src = chrome.runtime.getURL(headChars[encodedMsg[charIndex]] || headChars["blank"]);
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);

		cursorX += curSpace;
	}

	// Print movement chars
	else if (encodedMsg[charIndex] == "@"){
		if (charIndex + 1 < encodedMsg.length){
			if (encodedMsg[charIndex+1] in moveChars)
			{
				charIndex += 1;
			}
		}
		const char1 = new Image();
		char1.src = chrome.runtime.getURL(moveChars[encodedMsg[charIndex]] || moveChars["blank"]);
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);

		cursorX += curSpace;
	}

	// Print EMM chars
	else if (encodedMsg[charIndex] == "#"){
		if (charIndex + 1 < encodedMsg.length){
			if (encodedMsg[charIndex+1] in emmChars)
			{
				charIndex += 1;
			}
		}
		const char1 = new Image();
		char1.src = chrome.runtime.getURL(emmChars[encodedMsg[charIndex]] || emmChars["blank"]);
		await char1.decode();
		const char1Glyph = new Glyph(xScale, yScale, flipX, flipY, char1.width, char1.height, rotation);
		GetGlyphProps(encodedMsg, char1Glyph);
		DrawGlyph(ctx, char1, char1Glyph);

		cursorX += curSpace;
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