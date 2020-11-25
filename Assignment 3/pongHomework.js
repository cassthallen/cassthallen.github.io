//variables for ball
var ballX = 50;
var ballY = 50;
var diameter = 50; //for collision
var directionX = 6;
var directionY = 5;

//variables for Paddles
var rectX;
var rectY;
var rectW = 100;
var rectH = 25;
var started = false;
var paddleColor;
var lastFrame;

function setup()
{
    createCanvas(800,800);
    paddleColor = color(255)

}

function draw()
{
    background(100);
    if(keyIsDown(LEFT_ARROW))
        {
            rectX-=10
        }
    if(keyIsDown(RIGHT_ARROW))
        {
            rectX+=10
        }
    
    //ball bounces off walls
    ballX = ballX + directionX;
    ballY = ballY + directionY;
    
    if(ballX < 0 || ballX > width)
       {
            directionX =-directionX;
       }
    
    if(ballY < 0 || ballY > height)
        {
            directionY =-directionY;
        }
    
    //detect collision with paddle
    if((ballX > rectX && ballX < rectX + rectW) && (ballY + (diameter/2) >= rectY))
        {
            directionX *= -1;
            directionY *= -1;
            paddleColor = color(random(255), random(255), random(255))
            lastFrame = frameCount 
            //Line 49 takes lastFrame and makes it always equal to current Frame for the if function on line 53
        }
    
    //takes lastFrame and makes it wait 10 frames before switching color back to white. 
    if(frameCount > lastFrame + 10)
        {
            paddleColor = color(255)
        }
    
    //draw ball and paddle
    fill(255)
    ellipse(ballX, ballY, diameter);
    fill(paddleColor)
    rect(rectX, rectY, rectW, rectH);
    
    //update paddle location on start
    if(!started)
        {
            rectX = width/2;
            rectY = height - 100;
            started = true;
        }
}