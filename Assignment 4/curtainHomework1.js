var img1, img2, totalCircles, x, y, desiredColor, c;

//img1 and img2 are the images in the folder. totalCircles is how many circles are needed to fill the screen. DesiredColor is for which color we want, c is for changing a state on or off. 

function preload()
{
    img1 = loadImage("Data/albers.jpg");
    img2 = loadImage("Data/albers2.jpg");
    img3 = loadImage("Data/coolmemedude.jpg");
    img4 = loadImage("Data/pepesad.jpg");
}

function setup()
{
    createCanvas(400,400);
    background(100);
    
    //load image data
    img1.loadPixels();
    img2.loadPixels();
    img3.loadPixels();
    img4.loadPixels();
    
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
        
            var desiredColor1 = getColor1();
            var desiredColor2 = getColor2();
            var desiredColor3 = getColor3();
            var desiredColor4 = getColor4();
            
    
            if(c==0)
            {
                fill(desiredColor1);
            }
            
            if(c==1)
            {
                fill(desiredColor2);
            }
            
            if(c==2)
            {
                fill(desiredColor3);
            }
            
            if(c==3)
            {
                fill(desiredColor4);
            }
    
            ellipse(x, y, circleSize);
            currentCircle++;
        }
    
    //move down a row
    y = y + circleSize; 
    
    //start over at top
    if(y > 400)
        {
            totalCircles = random(25, 75);
            c += 1; 
            y = 0;
        }
    
    if(c>3)
        {
            c=0;
        }
}

function getColor1()
{
    var desiredColor1a = img1.get(floor(x), floor(y));
    return desiredColor1a;
}

function getColor2()
{
    var desiredColor2a = img2.get(floor(x), floor(y));
    return desiredColor2a;
}

function getColor3()
{
    var desiredColor3a= img3.get(floor(x), floor(y));
    return desiredColor3a;
}

function getColor4()
{
    var desiredColor4a = img4.get(floor(x), floor(y));
    return desiredColor4a;
}