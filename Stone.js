class Stone {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = this.radius;

        World.add(world,this.body);
        this.image = loadImage("stone.png"); 
    }   
display() {
var pos = this.body.position;
push();
imageMode(CENTER);
image(this.image,pos.x,pos.y,60,60); 
pop();


}






}

