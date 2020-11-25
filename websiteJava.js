let cnv, img, img1;

function preload()
{
    img = loadImage('clickme.png');
    img1 = loadImage('monke.png');
}

function setup()
{
    let cnv=createCanvas(400,400);
    background(0);
    cnv.parent('sketch-holder');
}

function draw()
{
    background(0);
    fill(0);
    
    var hoveredElements = document.querySelectorAll(':hover'); // all the elements the mouse is currently hovering over
    var currentElementMouseIsOver = document.querySelectorAll(':hover')[document.querySelectorAll(':hover').length-1]; // this is the last object in that hoveredElements array

    if (mouseIsPressed && currentElementMouseIsOver.id == "defaultCanvas0") // <-- check if the mouse is hovering over the canvas
    {
        image(img1, 0, 0, 400, 400);
        text("hewo c:", 170, 50, 100, 800);
        textSize(25);
    } 
    else 
    {
        image(img, 10, 10, 400, 400);
    }
}