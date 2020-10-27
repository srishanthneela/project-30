  
class Block{
  constructor(x, y, width, height,) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':1.0,
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed<3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(rgb(77, 166, 255))
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        this.visibility = this.visibility-5;
        push();
        World.remove(world,this.body);
        tint(255, this.visibility);
        pop();
      }
    }
}