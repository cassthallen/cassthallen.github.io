//smol is the squid png
//med is the crab png
//large is the octopus png

const EnemyTypes = Object.freeze({
    "smol": 0,
    "med": 1,
    "large": 2
})

//this class was made to represent the images and their health
class Enemy 
{
    constructor(image, sprite, type = EnemyTypes.smol) 
        {
            switch(type) 
                {
                    case EnemyTypes.smol: 
                        {
                            this.health = 1; //instakill
                            break;
                        }
                    
                    case EnemyTypes.med: 
                        {
                            this.health = 2;
                            break;
                        }
    
                    case EnemyTypes.large: 
                        {
                            this.health = 3;
                            break;
                        }
                }

//The next 3 lines do 3 things. It makes the images a sprite, makes it spawn going to the right, and immovable makes enemies not bounce into each other            
this.goingRight = true;
this.sprite = sprite;
this.sprite.immovable = true;
           
            //adds selected image to sprite
            if (image) 
                {
                    this.sprite.addImage(image);
                }
            
            this.type = type;
        }
    
//takes dmg away when projectile collides with alien
    hit() {
        this.health -= 1;

        if (this.health <= 0) 
        {
            this.die();
        }
    }

    get dead() {
        return (this.health <= 0);
    }

//removes sprite after projectile collision with enemy
    die() {
        console.log(this, "died!! Sadge");
        this.sprite.remove();
    }
}