const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

canvas.width = pageWidth;
canvas.height = pageHeight;

var image = new Image();

image.onload = () => {
    ctx.drawImage(image, 0, 0, pageWidth, pageHeight);
}

image.src = './world-map.png';

function updateCoordinates() {
    ctx.clearRect(0, 0, pageWidth, pageHeight);
    
    ctx.beginPath();

    ctx.font = '50px serif';
    ctx.fillText('Coordinates: ', 50, 90);
    
    ctx.stroke();
    
    requestAnimationFrame(updateCoordinates);
}

updateCoordinates();