class Rubber{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);

        imageMode(CENTER);
       // image(this.image, 0, 0, this.width, this.height);   
        fill("green")  
       ellipse(0,0,this.radius,this.radius);
       stroke("yellow")
       text("rubber",this.radius-10)  
        pop();
      }
}