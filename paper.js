class Paper{

    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0,
            friction:100,
            density:1
            
        }

        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("blue");
        fill(255);
        circle(0,0,this.radius);
        pop();

    }

}