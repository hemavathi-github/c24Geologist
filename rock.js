class Rock{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
	
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
 
        imageMode(CENTER);
        
        fill("red")  
         
                   //image(this.image, 0, 0, this.width, this.height);
        rect(0,0,this.width,this.height);
        stroke("yellow")
        text("rock",this.width-50,this.height-50)  
        pop();
      }
}