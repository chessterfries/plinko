class Plinko{
    constructor(x,y){
        var options = {
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x,this.y,10,options);
    World.add(world,this.body);
    }

    display(){
        var plinkoPos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(plinkoPos.x,plinkoPos.y,10,10);
    }
}