class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }
  display(){
    if(this.body.speed<3){
      super.display();
    }
    else{
      //remove the pigs from the game.
      World.remove(world, this.body);

      //tint amd image
      push();

      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50 );
      pop();
//pop
    }
    
  }
 

};