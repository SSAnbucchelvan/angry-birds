class Pig{
    constructor(x,y){
        var pig_options={
            
            friction:0.3,
            density:1.0,
            restitution:0.8
         }
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=50;

         this.body=bodies.rectangle(this.x,this.y,this.width,this.height,pig_options);
         world.add(myWorld,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    angleMode(RADIANS);
    rectMode(CENTER);
    fill("green");
    rect(0,0,this.width,this.height);
    pop();
    }
}