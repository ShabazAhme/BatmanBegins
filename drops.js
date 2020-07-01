class Drop{ 
  constructor(x,y){
      var options = {
        friction:0.2,  
        isStatic:false
      }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = 10;
    this.height= 10;
    World.add(world,this.body);
  }
  
  
  display(){
   push();
   var pos = this.body.position;
   ellipse(pos.x,pos.y,this.width,this.height);
   this.body.color = color("red");
   pop();
  }
  update(){
    if(this.drop.position.y>800){
        this.drop.position.y = 50;
    }
  }
}