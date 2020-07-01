class Umb{
    constructor(x,y,width,height){
        var options = {
            friction : 0.2,
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Man.png");
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}