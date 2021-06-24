class Snow{
    constructor(){
        var options = {
            density : 0.5,
            friction : 0.99,
            restitution : 0.98
        }
        
 
        
        
        this.body = Bodies.rectangle(random(100,700),0,40,40,options);
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
        
    }
    display(){


        push();
  
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        pop();
        }
}