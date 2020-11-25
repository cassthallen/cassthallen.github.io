var colorTable;
var names = [];
var hueVal = [];
var myRating = [];
var sz = [];

//load csv info
function preload()
{
    colorTable = loadTable("Assets/AwesomeTable.csv");
}

function setup()
{
    createCanvas(1000,1000);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    
    //call each column of our csv
    for(var i = 0; i < colorTable.getRowCount(); i++)
        {
            names[i] = colorTable.getString(i, 0);
            hueVal[i] = colorTable.getNum(i, 1);
            myRating[i] = colorTable.getNum(i, 2);
            sz[i] = map(myRating[i], 1, 10, 100, 1000);
        }
}

function draw()
{
    background(255);
    
    //draw text and visuals
    for(var i = 0; i < colorTable.getRowCount(); i++)
        {
            fill(hueVal[i], 80, 80)
            rect(140 * (i+1), 600, 20, -sz[i]);
            
            fill(0);
            textSize(9);
            text(names[i], 140 * (i+1), 610);
        }
}