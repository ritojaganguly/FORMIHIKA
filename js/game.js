class Game{
    constructor(){
        
    }
    getState(){
        var ref = db.ref("Gstate");
        ref.on("value", function(data){
            gamestate = data.val();
        })
    }
    update(state){
        db.ref("/").update({
            Gstate : state
        })
    }
    async start(){
        if (gamestate === 0){
            player = new Player();
            var pcref = await db.ref("Pcount").once("value");
            if(pcref.exists()){
                playercount=pcref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }

        car1 = createSprite(200,300);
        car2 = createSprite(400,300);
        car3 = createSprite(600,300);
        car4 = createSprite(800,300);
        car5 = createSprite(1000,300);

        cars = [car1,car2,car3,car4,car5];
    }

    play(){
        form.hideForm();
        textSize(40);
        text("Game BEGINS!!", 100,200);
        player.playerInfo();
        if(allPlayers !== undefined){
            //var posy = 130;
            var pindex = 0;
            var xpos = 0;
            var ypos;
           for (var p in allPlayers){
               pindex = pindex + 1;
               xpos = xpos + 200;
               ypos = displayHeight-allPlayers[p].distance
               cars[pindex-1].x= xpos;
               cars[pindex-1].y= ypos;
               if(pindex===player.index){
                   cars[pindex-1].shapeColor="blue";
                   camera.position.x = displayWidth/2
                   camera.position.y = cars[pindex-1].y
               }
                /* if(p === "player" + player.index){
                    fill("red");
                }else {
                    fill("black")
                }
               posy = posy + 20;
               textSize(15)
               text(allPlayers[p].name + ":" + allPlayers[p].distance, 50, posy);*/
            }
        }
    
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance = player.distance + 30;
            player.updatePlayer();
        }
        drawSprites();
    }
}