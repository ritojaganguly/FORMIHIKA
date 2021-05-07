class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var pcref = db.ref("Pcount");
        pcref.on("value",(data)=>{
            playercount  = data.val()
        })
    }
    update(count){
        db.ref("/").update({
            Pcount : count
        })
    }
    updatePlayer(){
        var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }
    playerInfo(){
        var Pinfo = db.ref("players");
        Pinfo.on("value", (data)=>{
            allPlayers = data.val()
        })
                          console.log(allPlayers);
    }
}