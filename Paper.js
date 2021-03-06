class Paper {

    constructor(x,y,diameter){
            // constructor function is invoked everytime we create an object from 'this' class! 
        var options= {

			isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }

        this.body = Bodies.circle(x,y,diameter,options);
        World.add(world, this.body);
        this.r = diameter/2;

    }

    display(){

      
        var angle = this.body.angle;
        var pos = this.body.position;

       push();
       strokeWeight(4);
	   stroke("blue");
	   fill("red");
       rotate(angle);
        translate(pos.x,pos.y);
     
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();


    }



}