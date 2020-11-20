class Slingshot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 20,
            stiffness: 0.03
        }
        this.pointB = pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    }
    fly() {
        this.sling.bodyA = null;

    }

    attach() {
        this.sling.bodyA = body; 
    }

display() {

push();
if(this.sling.bodyA) {
var pointA = this.sling.bodyA.position;
var pointB = this.pointB;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);
}

pop();

}



}