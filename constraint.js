class constraint{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }

    display(){
        if(this.constraint.bodyA){
        var pointA = this.constraint.bodyA.position;
        var pointB = this.constraint.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}