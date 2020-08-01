class Box {
    constructor(x,y) {
      var options = {
          isStatic: false,
          'restitution':0.6,
          'friction':2,
          'density':1

      }
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.width = 30;
      this.height = 40;
      this.visiblity = 255;
      World.add(world, this.body);
    }

    display(){
      console.log(this.body.speed);
      if(this.body.speed<7){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        tint(255,this.visiblity);
        this.visiblity = this.visiblity - 5;
        pop ();
      }
    }
    Score(){
      if(this.Vvsiblity < 200 && this.visiblity > -2000){
        score = score + 1;
     }
  }
}
