class Stone{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.stone = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        World.add(world, this.stone);
      }
      display(){
        push();
        translate(this.stone.position.x, this.stone.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      
}
