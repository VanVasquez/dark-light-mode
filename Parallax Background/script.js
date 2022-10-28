/**@type {HTMLCanvasElement} */
//showGameSpeed = span
//range = input

let gamespeed = 5

window.addEventListener('load', function() {
  
  const showGameSpeed = document.getElementById('showGameSpeed')
  const range = document.getElementById('range')
  
  range.addEventListener('change', function(e) {
    gamespeed = e.target.value
    showGameSpeed.innerHTML = gamespeed
  })
  
  showGameSpeed.innerHTML = gamespeed
  range.value = gamespeed
  
  animate()
})

const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 600
canvas.height = 500

const layer1 = new Layer(
  imageSrc = './images/layer-1.png',
  backgroundSpeed = 1
)
const layer2 = new Layer(
  imageSrc = './images/layer-2.png',
  backgroundSpeed = 0.0
)
const layer3 = new Layer(
  imageSrc = './images/layer-3.png',
  backgroundSpeed = 0.2
)
const layer4 = new Layer(
  imageSrc = './images/layer-4.png',
  backgroundSpeed = 0.8
)
const layer5 = new Layer(
  imageSrc = './images/layer-5.png',
  backgroundSpeed = 1
)

const backgrounds = [layer1, layer2, layer3, layer4, layer5]

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  backgrounds.forEach(background => {
    background.update()
  })
}