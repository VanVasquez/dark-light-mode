class Layer{
  constructor(imageSrc, backgroundSpeed) {
    this.image = new Image()
    this.image.src = imageSrc 
    this.width = 2200
    this.height = 500
    this.x = 0
    this.y = 0
    this.backgroundSpeed = backgroundSpeed
    this.speed = 0
  }
  update(){ 
    this.draw()   
    this.speed = this.backgroundSpeed * gamespeed
    if (this.x <= -this.width) this.x = 0
    this.x -= this.speed 
    console.log(gamespeed)
  }
  draw(){
    c.drawImage(
      this.image, 
      this.x, this.y, this.width, this.height
    )
    c.drawImage(
      this.image, 
      this.x + this.width, this.y, this.width, this.height
    )
  } 
}