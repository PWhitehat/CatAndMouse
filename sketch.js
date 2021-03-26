var mouse, mouseanim, mouseanim2;
var cat, catanim, catanim2;
var garden, gardenimg;

function preload() {

    mouseanim = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseanim2 = loadAnimation("images/mouse4.png");

    catanim = loadAnimation("images/cat2.png", "images/cat3.png");
    catanim2 = loadAnimation("images/cat4.png");

    gardenimg = loadImage("images/garden.png");

}

function setup(){

    createCanvas(950,550);

    garden = createSprite(475, 300, 1000, 600);
    garden.addImage("garden", gardenimg);
    
    mouse = createSprite(200, 450);
    mouse.addAnimation("tease", mouseanim);
    mouse.scale = 0.1;

    cat = createSprite(800, 440);
    cat.addAnimation("chase", catanim);
    cat.scale = 0.2;
    

    console.log(cat.width , mouse.width);
    
}

function draw() {

    background("cyan");

    if (keyDown("space")) {

        cat.velocityX = -5;

    }
    
    if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {

        cat.velocityX = 0;
        cat.addAnimation("caught", catanim2);
        cat.x = 400;
        cat.changeAnimation("caught", catanim2);

        mouse.addAnimation("caught", mouseanim2);
        mouse.changeAnimation("caught", mouseanim2);

    }

    drawSprites();
}