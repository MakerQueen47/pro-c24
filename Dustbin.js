class Dustbin{
    
 constructor(){

this.red1box= Bodies.rectangle(width/2+200, height-55, 200,20, {isStatic:true} );
World.add(world, this.red1box);

this.red2box = Bodies.rectangle(width/2+100, height-95, 20,100, {isStatic:true} );
World.add(world, this.red2box);

this.red3box = Bodies.rectangle(width/2+300, height-95, 20,100, {isStatic:true} );
World.add(world, this.red3box);

this.red1boxSprite=createSprite(width/2+200, height-55, 200,20);
this.red1boxSprite.shapeColor=color("green");

this.red2boxSprite=createSprite(width/2+100, height-95, 20,100);
this.red2boxSprite.shapeColor=color("purple");

this.red3boxSprite=createSprite(width/2+300, height-95, 20,100);
this.red3boxSprite.shapeColor=color("purple");




 }

 display(){

 drawSprites();

 }

}