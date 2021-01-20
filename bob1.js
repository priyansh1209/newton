class Bob1{
    constructor(x,y){
        
        var options={
            restitution:1.5,
            friction:0.05
        }

        this.body = Bodies.circle(x,y,20,options)
        World.add(world,this.body)
    }

    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,20,20)
        pop()
        

    }

}