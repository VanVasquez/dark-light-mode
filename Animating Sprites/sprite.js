 class Sprite{
  constructor(imageSrc, framesMax, sprites) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.frameX = 0;
    this.frameY = 0;
    this.frame = {width: 575, height: 523};
    this.size = {x: 300, y: 300};
    this.pos = {
      x: (canvas.width - this.size.x) / 2,
      y: (canvas.height - this.size.y) / 2
    };
    this.framesMax = framesMax;
    this.gameFrame = 0;
    this.staggerFrame = 5;
    this.currentFrame = 0;
    this.sprites = sprites; 
    
    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
    console.log(sprites)
  }
  update() {
    this.draw();
    this.animateFrame();
  }
  draw() {
    c.drawImage(
      this.image, this.frameX, this.frameY,
      this.frame.width, this.frame.height,
      this.pos.x, this.pos.y, this.size.x, this.size.y
    ); 
  }
  animateFrame() {
    this.gameFrame++
    this.currentFrame = Math.floor(this.gameFrame/this.staggerFrame) % this.maxFrame
    this.frameX = this.currentFrame * this.frame.width
  }
  switchSprite(sprite) {
    switch (sprite) {
      case 'idle':
        this.image = this.sprites.idle.image
        this.maxFrame = this.sprites.idle.maxFrame 
        break;
    
      case 'jump':
        this.image = this.sprites.jump.image
        this.maxFrame = this.sprites.jump.maxFrame 
        break;
      
      case 'fall':
        this.image = this.sprites.fall.image
        this.maxFrame = this.sprites.fall.maxFrame 
        break;
        
      case 'run':
        this.image = this.sprites.run.image
        this.maxFrame = this.sprites.run.maxFrame 
        break;
        
      case 'dizzy':
        this.image = this.sprites.dizzy.image
        this.maxFrame = this.sprites.dizzy.maxFrame 
        break;
        
      case 'sit':
        this.image = this.sprites.sit.image
        this.maxFrame = this.sprites.sit.maxFrame 
        break; 
        
      case 'roll':
        this.image = this.sprites.roll.image
        this.maxFrame = this.sprites.roll.maxFrame 
        break;
        
      case 'bite':
        this.image = this.sprites.bite.image
        this.maxFrame = this.sprites.bite.maxFrame 
        break;
        
      case 'ko':
        this.image = this.sprites.ko.image
        this.maxFrame = this.sprites.ko.maxFrame 
        break;
        
      case 'getHit':
        this.image = this.sprites.getHit.image
        this.maxFrame = this.sprites.getHit.maxFrame 
        break;
    }
  }
}