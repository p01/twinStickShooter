const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const gameState = {
  size: 256,
  keysDown: {},
  sprites: new Image(),
  player: {},
  entities: [],
  score: 0,
  hiScore: Number(localStorage.hiScore) | 0,
  currentTime: 0
};

// Add player & robots
gameState.player = new Player();
for (let i = 0; i < 16; i++)
  gameState.entities.push(new Robot());

// keyboard handling to keep a list of the keys down at any frame
onkeydown = e => gameState.keysDown[e.key] = true;
onkeyup = e => delete gameState.keysDown[e.key];

let then = Date.now();
const gameLoop = () => {
  // schedule next gameLoop update, clear the canvas, set the globalCompositeOperation
  requestAnimationFrame(gameLoop);
  canvas.width = canvas.height = gameState.size;
  ctx.globalCompositeOperation = 'lighten';

  // update time
  gameState.currentTime = Math.round(performance.now()) / 1000;
  
  // Display the Health, Score and High Score
  ctx.fillStyle = 'rgba(200,255,255,.3)';
  ctx.fillText('Health: ' + gameState.player.energy, 28, 12);
  ctx.fillText('Score: ' + gameState.score, 28, 28);
  if (gameState.score > gameState.hiScore)
    localStorage.hiScore = gameState.hiScore = gameState.score;
  ctx.fillText('High score: ' + gameState.hiScore, 28, 44);

  // update the player and entities
  gameState.player.update();
  gameState.entities.forEach(entity => entity.update());

  // filter out dead entities
  gameState.entities =
    gameState.entities.filter(entity => entity.energy > 0);
};

// kick the gameLoop once the sprites are loaded 
gameState.sprites.src = 'sprites.png';
gameState.sprites.onload = gameLoop;