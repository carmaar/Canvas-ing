/* CARLY PENNOCK 
JavaScript30 - Project 1/5 */

// original code - creating canvas and context for the canvas
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// original code 
ctx.strokeStyle = '#BADA55';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// added - brushes
let brushes = {
    Brush: 0,
    Eraser: 1
}

// original code
function draw(e) {
    if (!isDrawing) return; //stop funciton from running when not moused down

    // added - change color depending on brush selected
    if (SelectedBrush == brushes.Brush) {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        //brush 
    } else if (SelectedBrush == brushes.Eraser) {
        ctx.strokeStyle = `hsl(${hue}, 100%, 100%)`;
        // eraser 
    }

    // original code - creating lines & assigning them to where user is moused down
    ctx.beginPath();
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // original code - iterates through hex codes to make the colors change
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    // original code - 
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    //  original code - 
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

// added - toolkit
function tools(brush) {
    SelectedBrush = brush;
}

// original code
canvas.addEventListener('mousedown', () => isDrawing = true);
// added
canvas.addEventListener('mousedown', draw);
// original code
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);