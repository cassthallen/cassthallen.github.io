var rains = [];
var rainwidth = [3, 6, 8, 10, 12]

function setup()
{
    createCanvas(800, 600);
    
    for(var i = 0; i < 40; i++)
        {
            
            rains[i] = new rain(random(width), random(height), random(rainwidth), 3, 6);
        }
}

function draw()
{
    background(100);
    
    for(var i = 0; i < rains.length; i++)
        {
            rains[i].drawRain();
            rains[i].jitterRain();
            rains[i].resetRain();
        }

}

function rain(rainX, rainY, rainSize, speedX, speedY)
{
    //the 'fields' of the Bubble object that we'd like to control in every instance of the object. The "this" keyword is used to declare local variables within this object, and the parameters are passed onto them.
    
    this.x = rainX;
    this.y = rainY; 
    this.sz = rainSize;
    this.spX = speedX;
    this.spY = speedY;
    
    //these are the methods (or, nested functions) of the rect object
    
    this.drawRain = function()
    {
        fill(0, 150,255);
        rect(this.x, this.y, this.sz / 2, this.sz * 2);
    }
    
    this.jitterRain = function ()
    {
        this.x += this.spX;
        
        //makes it jitter toward top of canvas
        this.y += this.spY;
    }
    
    this.resetRain = function()
    {
        if(this.y > height)
        {
            this.y = 0;   
        }
        
        if(this.x > width)
        {
            this.x = 0;   
        }
    }
}