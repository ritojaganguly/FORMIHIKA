class Form{
    constructor(){
        this.input = createInput("Name please!");
        this.button = createButton("Let's gooooo!!!");
        this.greeting = createElement("h2");
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game- Register NOW!");
        title.position(displayWidth/2, 10);

        this.input.position(displayWidth/2+300, displayHeight/2);
        
        this.button.position(displayWidth/2+370, displayHeight/2+50); 

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playercount = playercount + 1;
            player.index = playercount;
            player.update(playercount);
            player.updatePlayer();
            
            this.greeting.html("Hey" + " " + this.input.value() + "!");
            this.greeting.position(displayWidth/2+300, displayHeight/2);
            
        })
    }
    hideForm(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}