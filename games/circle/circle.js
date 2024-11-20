const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

var circleIsBeingHovered = false;

canvas.width = pageWidth;
canvas.height = pageHeight;

const sourceLink = "https://replit.com/@ARYANRAJESH/EraEdu#games/circle/circle.js";

// config from dat-gui gui.
let config = {
    RADIUS: 200 // preset radius
}

function startGUI() {
    // Start dat-gui and add a RADIUS option which configures config.RADIUS, minimum is 0 and max is 1000, the name is radius.
    var gui = new dat.GUI({width: 300});
    gui.add(config, "RADIUS", 5, 1000).name("radius");

    // Add a button to open the source in a new tab
    // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/blob/master/script.js#L269
    let source = gui.add({
        fun: () => {
            window.open(sourceLink);
        }
    }, "fun").name("View Source Code");
    
    source.__li.className = "cr function bigFont";
    source.__li.style.borderLeft = "3px solid #00FF7F";
}


canvas.onmousemove = (event) => {
    /*if () {
        circleIsBeingHovered = true;
    } else {
        circleIsBeingHovered = false;
    }*/
}

// draw the circle with the following radius
function drawCircle(radius) {
    var centerWidth = pageWidth / 2;
    var centerHeight = pageHeight / 2;

    var circumference = (2 * Math.PI) * radius;
    var diameter = 2 * radius;
    var area = Math.PI * (Math.pow(radius, 2));

    /////////////////////////////////////////////

    // Draw the circle.

    ctx.beginPath();

    ctx.arc(centerWidth, centerHeight, radius, 2 * Math.PI, false);

    ctx.fillStyle = '#d6d6d6';
    ctx.fill();

    ctx.stroke();

    /////////////////////////////////////////////

    

    ctx.beginPath();

    ctx.lineWidth = 2;
    ctx.fillStyle = 'black'
    ctx.font = '35px arial';
    ctx.strokeStyle = "#000000";

    // Draw the text with radius, this is also to "clip" onto the edges and not past
    // TODO: bad naming
    var radiusText = `Radius: ${Math.floor(radius)}`;
    var radiusTextMeasurement = ctx.measureText(radiusText);
    var radiusTextWidthAligment = ((2 * centerWidth) + radius) / 2; // where the text is located
    var radiusTextMaxWidthAligment = (pageWidth - radiusTextMeasurement.width) - 10;  // if we hit the end of the page, the side, we want to keep this as the width
    // If we didn't do this, the radius text would clip into the right instead of beside
    // It's kinda weird to describe

    if (radiusTextWidthAligment > radiusTextMaxWidthAligment) {
        ctx.fillText(radiusText, radiusTextMaxWidthAligment, centerHeight - 10);
    } else {
        ctx.fillText(radiusText, radiusTextWidthAligment, centerHeight - 10);
    }

    ctx.stroke();

    /////////////////////////////////////////////

    // Draw radius line
    ctx.beginPath();

    ctx.strokeStyle = "#f54242";

    // Draw the line for radius
    ctx.moveTo(centerWidth, centerHeight);
    ctx.lineTo(centerWidth + radius, centerHeight - 2); // minus 2 cause of circle line width

    ctx.stroke();

    /////////////////////////////////////////////

    // Draw blue diameter line
    ctx.beginPath();

    ctx.strokeStyle = "#4e3deb";

    ctx.moveTo(centerWidth, centerHeight - radius);
    ctx.lineTo(centerWidth, centerHeight + radius - 2);
    
    ctx.stroke();

    /////////////////////////////////////////////

    // Draw diameter text
    ctx.beginPath();

    ctx.strokeStyle = "#000000";
    var diameterText = `Diameter: ${Math.floor(2 * radius)} [2 * ${Math.floor(radius)}]`;

    // Just in case if the diameter text is out of vision, set the height to 40
    if ((centerHeight - radius + 50) < 40) {
        ctx.fillText(diameterText, centerWidth + 10, 40)
    } else {
        ctx.fillText(diameterText, centerWidth + 10, centerHeight - radius + 50)
    }
    
    ctx.stroke();

    /////////////////////////////////////////////

    //

    ctx.beginPath();
    
    ctx.font = "30px arial";

    // Equations as text
    var circumferenceText = `Circumference: ${Math.floor(circumference)} [2π * ${Math.floor(radius)}]`;
    var areaText = `Area: ${Math.floor(area)} [π(${Math.floor(radius)}^2)]`;

    // Measurements
    var circumferenceTextMeasurement = ctx.measureText(circumferenceText);
    var areaTextMeasurement = ctx.measureText(areaText);
    
    ctx.fillText(circumferenceText, 10, 40);
    ctx.fillText(areaText, 10, 70);

    ctx.stroke();

    /////////////////////////////////////////////

    // Draw a line from the circumference label to the top of the circle.
    
    ctx.beginPath();

    ctx.moveTo(circumferenceTextMeasurement.width + 15, 40);
    ctx.lineTo(centerWidth, centerHeight - radius); // centerHeight - radius = top of cicle

    ctx.stroke();

    /////////////////////////////////////////////

    // Draw a line from the area label to the circle, the top left quadrant.

    ctx.beginPath();

    ctx.moveTo(areaTextMeasurement.width + 15, 70);
    ctx.lineTo(centerWidth - (radius / 2), centerHeight - (radius / 2)); // take the whole width for ex, divide the radius by 2 and take it away from the center width

    ctx.stroke();

    /////////////////////////////////////////////

    // Draw formulas

    /*ctx.beginPath();

    var diameterFormula = 'Diameter = 2r';
    var circumferenceFormula = 'Circumference = 2πr';
    var areaFormula = 'Area = πr²'

    ctx.beginPath();
    //ctx.fillText()
    ctx.stroke();*/
}

// this function runs every tick
function update() {
    ctx.clearRect(0, 0, pageWidth, pageHeight); // clear canvas
    drawCircle(config.RADIUS);
    requestAnimationFrame(update);
}

update();
startGUI();
