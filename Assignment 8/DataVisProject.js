//Consoles and their colors
    //Wave 4 = PS2 Alien in Blue, 155m units sold
    //Wave 3 = Wii aliens in White, 101m units sold
    //Wave 2 = Switch aliens, red, 62m sold
    //Wave 1 = Xbox One aliens, Dark Green, 50m sold

//Small Squids Aliens represent 1 million units sold
//Medium Crab Aliens represent 5 million sold
//Large Octopus Aliens represent 10 million sold

//Wave 1 = 50 Small Squids (50 million units)
//Wave 2 = 5 Medium Crabs (25 million units), 37 Small Squids (37m units)
//Wave 3 = 5 Large Octopus (50m units), 5 Medium Crabs (25m units), 26 Small Squids (26m units)
//Wave 4 = 8 Large Octopus (80m units), 10 medium crabs (50m units), 25 Small squids (25m units)

var player;
var projectiles = []
var xboxImage = [];
var switchImage = [];
var wiiImage = [];
var ps2Image = [];
var enemies = [];
var waveNumber = 1;
var alienTable;

//loads table
function preload()
{
    alienTable = loadTable("DataVisProject/Aliens.csv")
}

function setup()
{
    createCanvas(800,800);
    
    //creates the zone for the Player Ship Image
    player = createSprite(width/2, 775, 50, 50);
    
    //Imports the image for player within the zone created on line 29
    player.addImage(loadImage("DataVisProject/PlayerShip.png"))
    
    //Imports the image for Wave 1
    xboxImage [0] = (loadImage("DataVisProject/Wave1_XBOX ONE ALIENS/SQUID_SMALL.png"))
    
    //Imports the images for Wave 2
    switchImage [0] = (loadImage("DataVisProject/Wave2_SWITCH ALIENS/SQUID_SMALL.png"))
    switchImage [1] = (loadImage("DataVisProject/Wave2_SWITCH ALIENS/CRAB_MEDIUM.png"))
    
    //Imports the images for Wave 3
    wiiImage [0] = (loadImage("DataVisProject/Wave3_WII ALIENS/SQUID_SMALL.png"))
    wiiImage [1] = (loadImage("DataVisProject/Wave3_WII ALIENS/CRAB_MEDIUM.png"))
    wiiImage [2] = (loadImage("DataVisProject/Wave3_WII ALIENS/OCTOPUS_LARGE.png"))
    
    //Imports the images for Wave 4
    ps2Image [0] = (loadImage("DataVisProject/Wave4_PS2 ALIENS/SQUID_SMALL.png"))
    ps2Image [1] = (loadImage("DataVisProject/Wave4_PS2 ALIENS/CRAB_MEDIUM.png"))
    ps2Image [2] = (loadImage("DataVisProject/Wave4_PS2 ALIENS/OCTOPUS_LARGE.png"))
    
    //creating waves
    createWave(1);
} 

function createWave(number)
{
    if(number == 1)
        {
            var rows = 0;
            for(var i = 0; i < alienTable.getNum(1, 0); i++)
                {
                    if(i % 10 == 0)
                        {
                            rows++;
                        }
                    //math.ceil evenly spaces the rows
                    var y = Math.ceil(i / 10); 
                    var enemySprite = createSprite((i % 10) * 55, rows * 55, 50, 50)
                    enemies.push(new Enemy(xboxImage [0], enemySprite, EnemyTypes.smol));
                }
        }

    if(number == 2)
        {
            var rows = 0;
            for(var i = 0; i < alienTable.getNum(2, 0)+alienTable.getNum(2, 1); i++)
                {
                    //once we hit 10 units in a row, make a new row
                    if(i % 10 == 0)
                        {
                            rows++;
                        }
                    
                    var y = Math.ceil(i / 10); 
                    var enemySprite = createSprite((i % 10) * 55, rows * 55, 50, 50)
                    var enemyType;
                    var enemyImage;
                    if(i < 5)
                        {
                            enemyType = EnemyTypes.smol;
                            enemyImage = switchImage[0];
                        }
                    else if(i < 37)
                        {
                            enemyType = EnemyTypes.med;
                            enemyImage = switchImage[1];
                        }
                    enemies.push(new Enemy(enemyImage, enemySprite, enemyType));
                }
        }
    if(number == 3)
        {
            var rows = 0;
            for(var i = 0; i < alienTable.getNum(3, 0)+alienTable.getNum(3, 1)+alienTable.getNum(3, 2); i++)
                {
                    //once we hit 10 units in a row, make a new row
                    if(i % 10 == 0)
                        {
                            rows++;
                        }
                    
                    var y = Math.ceil(i / 10); 
                    var enemySprite = createSprite((i % 10) * 55, rows * 55, 50, 50)
                    var enemyType;
                    var enemyImage;
                    if(i < 5)
                        {
                            enemyType = EnemyTypes.large;
                            enemyImage = wiiImage[2];
                        }
                    else if(i < 10)
                        {
                            enemyType = EnemyTypes.med;
                            enemyImage = wiiImage[1];
                        }
                    else if(i < 26)
                        {
                            enemyType = EnemyTypes.smol;
                            enemyImage = wiiImage[0];
                        }
                    enemies.push(new Enemy(enemyImage, enemySprite, enemyType));
                }
        }
            
    if(number == 4)
        {
            var rows = 0;
            for(var i = 0; i < alienTable.getNum(4, 0)+alienTable.getNum(4, 1)+alienTable.getNum(4, 2); i++)
                {
                    //once we hit 10 units in a row, make a new row
                    if(i % 10 == 0)
                        {
                            rows++;
                        }
                    
                    var y = Math.ceil(i / 10); 
                    var enemySprite = createSprite((i % 10) * 55, rows * 55, 50, 50)
                    var enemyType;
                    var enemyImage;
                    if(i < 8)
                        {
                            enemyType = EnemyTypes.large;
                            enemyImage = ps2Image[2];
                        }
                    else if(i < 10)
                        {
                            enemyType = EnemyTypes.med;
                            enemyImage = ps2Image[1];
                        }
                    else if(i < 25)
                        {
                            enemyType = EnemyTypes.smol;
                            enemyImage = ps2Image[0];
                        }
                    enemies.push(new Enemy(enemyImage, enemySprite, enemyType));
                }
        }
    
    waveNumber = number;
}

function draw()
{
    enemyMovement();
    
    //sets background to black
    background(0);
    
    //draws player ship
    drawSprites();
    
    //draws on screen text
    drawWaveInfo();
    
    //player movement from left to right, 65 for left arrow key and 68 for right arrow key
    if (keyIsDown(68)) 
    {
        player.velocity.x = 5;
    } 
    
    else if (keyIsDown(65)) 
    {
        player.velocity.x = -5;
    } 
    
    //if A or D is not pressed, do not move the ship
    else 
    {
        player.velocity.x = 0;
    }
    
    //player projectile, 32 is spacebar
    //keyWentDown checks for ONE press of the key as opposed to ISDOWN repeating the keypress
    if (keyWentDown(32))
    {
        var projectile = createSprite(player.position.x, player.position.y, 3, 5);
        projectile.shapeColor = color(255, 255, 255);
        
        //adds upwards velocity to projectile
        projectile.velocity.y = -3;
        
        //everytime you shoot, a projectile will be added to the array
        projectiles.push(projectile);
    }
    
    //enemy collisions with projectiles
    for(var i = 0; i < projectiles.length; i++)
        {
            for(var j = 0; j < enemies.length; j++)
                {
                    if(projectiles[i].collide(enemies[j].sprite))
                        {
                            projectiles[i].remove();
                            enemies[j].hit();
                            if(enemies[j].dead)
                                {
                                    enemies.splice(j, 1);
                                }
                        }
                }
        }
    
    //creates next wave when all enemies defeated
    if(enemies.length == 0)
        {
            waveNumber++;
            createWave(waveNumber);
        }
}

function enemyMovement() 
{
    for (var i = 0; i < enemies.length; i++) 
    {
        if (enemies[i].sprite.position.x < 0 || enemies[i].sprite.position.x > width) 
        {
            //moves the whole wave together when even one enemy hits the left or right walls
            enemies.forEach((enemy, i) => 
                {
                    enemy.sprite.position.x += (enemy.goingRight) ? -5 : 5;
                    enemy.goingRight = !enemy.goingRight;
                    enemy.sprite.position.y += 40;
                });
            break;
        } 
        
        if (enemies[i].goingRight == true) 
            {
                //Move right
                enemies[i].sprite.position.x += 1;
            } 
            
        else 
            {
                //Move left
                enemies[i].sprite.position.x -= 1;
            }
    }    
}

function drawWaveInfo()
{
    fill(255);
    textAlign(CENTER);
    textSize(18);
    
    if(waveNumber == 1)
        {
            text("Wave 1: XBOX ONE \n 50m Sold \n 50 Squids", width/2, 16)
        }
    
    if(waveNumber == 2)
        {
            text("Wave 2: Nintendo Switch \n 62m Sold \n 5 Crabs \n 37 Squids", width/2, 16)
        }
    
    if(waveNumber == 3)
        {
            text("Wave 3: Nintendo Wii \n 101m Sold \n 5 Octopuses \n 5 Crabs \n 26 Squids", width/2, 16)
        }
    
    if(waveNumber == 4)
        {
            text("Wave 4: PS2 \n 155m Sold \n 8 Octopuses \n 10 Crabs \n 25 Squids", width/2, 16)
        }
    
    if(waveNumber > 4)
        {
            textSize(26);
            text("YOU WIN! \n Made by Cass Allen", width/2, height/2)
        }
}