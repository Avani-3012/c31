class plinko{
    constructor(x,y,radius) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius =10 ;
      World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;	
        push()
        ellipseMode(RADIUS)
        //strokeWeight(4);
        fill("white")
        ellipse(0,0,this.radius, this.radius)
        pop()
    }
  
  }