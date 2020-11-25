var age;

function setup()
{
    let inp = createInput('');
    inp.input(myInputEvent);

    createCanvas(600,600);
}

function myInputEvent()
    {
        age = parseInt(this.value());
        console.log(this.value());
    }

function draw()
{ 
    
    if (age > 0 && age <= 9)
        {
            background(0,255,26);
        }
    
    if (age > 10 && age <= 19)
        {
            background(230,255,0);
        }
    
    if (age > 20 && age <= 29)
        {
            background(0,230,255);
        }
    
    if (age > 30 && age <= 39)
        {
            background(43,0,255);
        }
    
    if (age > 40 && age <= 49)
        {
            background(255,0,179);
        }
    
    if (age > 50 && age <= 59)
        {
            background(230,255,0);
        }
    
    if (age > 60 && age <= 69)
        {
            background(255,0,0);
        }
    
    if (age > 70 && age <= 79)
        {
            background(0,0,0);
        }
    
    if (age > 80 && age <= 89)
        {
            background(131,131,131);
        }
}