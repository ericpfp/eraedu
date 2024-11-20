const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

// set x and y as 0 until the cursor updates
var mouseX = 0;
var mouseY = 0;

canvas.width = pageWidth;
canvas.height = pageHeight;

var image = new Image();

image.onload = () => {
    // draw the map image
    ctx.drawImage(image, 0, 0, pageWidth, pageHeight);
}

image.src = './world-map.png';

function updateCoordinates() {
    // clear coordinate area
    ctx.clearRect(0, 0, pageWidth, pageHeight);
    
    // reload image
    ctx.drawImage(image, 0, 0, pageWidth, pageHeight);
    
    ctx.beginPath();
    
    ctx.font = '30px arial';

    // setup coorinates text and measure it for future use
    var coordinatesText = `Coordinates: (${mouseX}, ${mouseY})`;
    var coordinatesTextMeasurement = ctx.measureText(coordinatesText);

    // fill text with 10px padding or whatever
    ctx.fillText(coordinatesText, 10, pageHeight - 10);
    
    ctx.stroke();
    
    requestAnimationFrame(updateCoordinates);
}

canvas.onmousemove = (event) => {
    // Update mouseX and mouseY
    mouseX = event.pageX;
    mouseY = event.pageY;
}

updateCoordinates();