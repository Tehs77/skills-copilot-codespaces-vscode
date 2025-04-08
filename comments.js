//create web browser
// window with HTML5 canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

// set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// set font size and color
ctx.font = '16px Arial';
ctx.fillStyle = 'black';

// draw text on canvas
ctx.fillText('Hello World', 50, 50);

// create a button to save the canvas as an image
const saveButton = document.createElement('button');
saveButton.innerText = 'Save Image';
document.body.appendChild(saveButton);

// add click event to button
saveButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = canvas.toDataURL();
    link.click();
});