class Slingshot {
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        }
        this.sling = Constraint.create(options);
        World.add (world,this.sling);
    }
    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.bodyB.position;
        fill("black");
        strokeWeight(5);
        line (posA.x,posA.y,posB.x,posB.y);
    }
}