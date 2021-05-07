var db;
var form, game, player;
var gamestate = 0;
var playercount = 0;
var allPlayers;
var car1, car2, car3, car4, car5;
var cars;

function setup(){
    createCanvas(displayWidth, displayHeight);
    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playercount === 5){
        game.update(1);
    }
    if(gamestate === 1){
        clear();
        game.play();
    }
}
