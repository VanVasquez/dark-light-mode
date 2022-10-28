let playState = 'idle';
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change', function(e) {
  playState = e.target.value;
  console.log(playState);
});

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const sprite = new Sprite(
  imageSrc = './sprite/idle.png',
  frameMax = 7,
  sprites = {
    idle: {
      imageSrc: './sprite/idle.png',
      maxFrame: 7
    },
    jump: {
      imageSrc: './sprite/jump.png',
      maxFrame: 7
    },
    fall: {
      imageSrc: './sprite/fall.png',
      maxFrame: 7
    },
    run: {
      imageSrc: './sprite/run.png',
      maxFrame: 9
    },
    dizzy: {
      imageSrc: './sprite/dizzy.png',
      maxFrame: 11
    },
    sit: {
      imageSrc: './sprite/sit.png',
      maxFrame: 5
    },
    roll: {
      imageSrc: './sprite/roll.png',
      maxFrame: 6
    },
    bite: {
      imageSrc: './sprite/bite.png',
      maxFrame: 7
    },
    ko: {
      imageSrc: './sprite/ko.png',
      maxFrame: 12
    },
    getHit: {
      imageSrc: './sprite/get hit.png',
      maxFrame: 4
    }
  }
);

window.addEventListener('load', function () {
  animate();
});

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  sprite.update();
  
  if (playState == 'idle') {
    sprite.switchSprite('idle')
  } else if (playState == 'jump') {
    sprite.switchSprite('jump')
  } else if (playState == 'fall') {
    sprite.switchSprite('fall')
  } else if (playState == 'run') {
    sprite.switchSprite('run')
  } else if (playState == 'dizzy') {
    sprite.switchSprite('dizzy')
  } else if (playState == 'sit') {
    sprite.switchSprite('sit')
  } else if (playState == 'roll') {
    sprite.switchSprite('roll')
  } else if (playState == 'bite') {
    sprite.switchSprite('bite')
  } else if (playState == 'ko') {
    sprite.switchSprite('ko')
  } else if (playState == 'getHit') {
    sprite.switchSprite('getHit')
  }
}
