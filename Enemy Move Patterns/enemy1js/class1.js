class Enemy{
  constructor(imageSrc) {
    this.image = new Image()
    this.image.src = imageSrc
    this.sprite = {width: 293, height: 155}
    this.width = this.sprite.width / 3
    this.height = this.sprite.height / 3 
    this.x = Math.random() * (canvas.width - this.width)  
    this.y = Math.random() * (canvas.height - this.height)
    this.maxFrame = 6
    this.staggerFrame = Math.random() * 3 + 1
    this.gameFrame = 0
    this.frameX = 0
  }
  update() {
    this.draw() 
    this.animateSprite()
    
    this.x +=  Math.random() * 5 - 2.5
    this.y +=  Math.random() * 5 - 2.5
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