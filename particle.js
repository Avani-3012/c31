class particle{
constructor(x, y,r) {
    var options ={
    restitution:0.4
    }
    this.radius =radius ;
    this.body - Bodies.circle(x, y, this.r,options);
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add (world, this. body);
   }
    display() {
    var pos = this. body.position;
    var angle = this. body.angle;
    
    push ();
    translate(pos. X, pos.y);
    rotate(angle);
    
    noStroke() ;
    
    fill(this. color)
    ellipseMode(RADIUS)
    ellipse( this.r, this.r);
    pop()
    }
};
