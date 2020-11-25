var img1, img2, totalCircles, x, y, desiredColor, c;
//img1 and img2 are the images in the folder. totalCircles is how many circles are needed to fill the screen. DesiredColor is for which color we want, c is for changing a state on or off. 

function preload()
{
    img1 = loadImage("Data/albers.jpg");
    img2 = loadImage("Data/albers2.jpg");
}

function setup()
{
    createCanvas(400,400);
    background(100);
    
    //load image data
    img1.loadPixels();
    img2.loadPixels();
    
    //initialize values
    totalCircles = 50;
    y = 0;
    c = 1;
}

function draw()
{
    //set circle size based off total circles
    var circleSize = width/totalCircles;
    
    //draw circles
    var currentCircle = 0;
    
    //keeps circle size proporttional to width
    while(currentCircle < totalCircles)
        {
            x = currentCircle * circleSize;
        
    
            //get color
            var desiredColor1 = getColor1();
            var desiredColor2 = getColor2();
    
            if(c>0)
            {
                fill(desiredColor1);
            }
            
            if(c<0)
            {
                fill(desiredColor2);
            }
    
            ellipse(x, y, circleSize);
            currentCircle++;
        }
    
    //move down a row
    y = y + circleSize; 
    
    //start over at top
    if (y > 400)
        {
            totalCircles = random(25, 75);
            c = -c; 
            y = 0;
        }
}

function getColor1()
{
    var desiredColor1 = img1.get(floor(x), floor(y));
    return desiredColor1;
}

function getColor2()
{
    var desiredColor2 = img2.get(floor(x), floor(y));
    return desiredColor2;
}