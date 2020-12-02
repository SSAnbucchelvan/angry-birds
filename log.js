class Log{
    constructor(x,y,height,angle){
        var log_options={
            
            friction:5.0,
            density:1.0,
            restitution:0.8
         }
        this.x=x;
        this.y=y;
        this.width=20;
        this.height=height;
        //this.angle=angle;

         this.body=bodies.rectangle(this.x,this.y,this.width,this.height,log_options);
         Matter.Body.setAngle(this.body,angle);
         world.add(myWorld,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    angleMode(RADIANS);
    fill("brown")
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
}