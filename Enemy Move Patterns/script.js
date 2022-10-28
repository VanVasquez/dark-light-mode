/**@type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1')
const c = canvas.getContext('2d')

canvas.width = 400
canvas.height = 600
 
window.addEventListener('load', function() {
  animate()
})

const numberOfEnemy = 20
const enemies = []

for (let i = 0; i < numberOfEnemy; i++) {
  enemies.push(new Enemy(
    imageSrc = './sprites/enemy3.png'
  ))
}

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)   
  enemies.forEach( enemy => {
    enemy.update()
  })
}