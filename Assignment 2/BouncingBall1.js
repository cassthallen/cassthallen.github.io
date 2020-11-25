var startX;
var startY;
var directionX;
var directionY;
var color;

function setup()
{
    //initial setup of canvas
    createCanvas(500,500);
    background(255, 0, 0);
    
    //starting point for ball
    startX = width/2;
    startY = height/2;
    
    //movement of ball
    directionX = 9;
    directionY = 1;
}

function draw()
{
    //starting point, add movement
    startX = startX + directionX;
    startY = startY + directionY;
    
    //bouncing animation
    if(startX > width)
        {
            directionX = -directionX;
        }
    if(startX < 0)
        {
            directionX = -directionX;
        }
    if(startY > height)
        {
            directionY = -directionY;
        }
    if(startY < 0)
        {
            directionY = -directionY;
        }
    
    //draw ball
    color = map(startX, 250, width, 200, width);
    fill(color, 200, 0);
    ellipse(startX, startY, 50);
}