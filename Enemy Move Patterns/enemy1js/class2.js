class Enemy{
  constructor(imageSrc) {
    this.image = new Image()
    this.image.src = imageSrc
    this.speed = Math.random() * 4 + 1
    this.sprite = {width: 266, height: 188}
    this.width = this.sprite.width / 3
    this.height = this.sprite.height / 3 
    this.x = Math.random() * (canvas.width - this.width)  
    this.y = Math.random() * (canvas.height - this.height)
    this.maxFrame = 6
    this.staggerFrame = Math.random() * 3 + 1
    this.gameFrame = 0
    this.frameX = 0
    this.angle = Math.random() * 2
    this.angleSpeed = Math.random() * 0.2
    this.curve = Math.random() * 7
  }
  update() {
    this.draw() 
    this.animateSprite()
    
    this.x -= this.speed
    this.y += this.curve *  Math.sin(this.angle)
    this.angle += this.angleSpeed 
    if (this.x + this.width < 0) this.x = canvas.width
  }
  draw() {
    c.drawImage(
      this.image,
      this.frameX, 0, this.sprite.width, this.sprite.height,
      this.x, this.y, this.width, this.height
    )
  }
  animateSprite() {
    this.gameFrame++
    this.position = Math.floor(this.gameFrame/this.staggerFrame) % this.maxFrame
    this.frameX = this.position * this.sprite.width
  }
}