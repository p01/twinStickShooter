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
  currentTime: 0,
  shake: 0
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
  ctx.globalCompositeOperation = 'lighter';

  // update time
  gameState.currentTime = Math.round(performance.now()) / 1000;

  // Screen shake & flash
  gameState.shake *= .95;
  document.body.style.backgroundColor = 'rgba(255, 0, 51, '+ gameState.shake +')';
  ctx.translate(
    0 | gameState.size / 48 * Math.sin(Math.random() * gameState.shake),
    0 | gameState.size / 48 * Math.sin(Math.random() * gameState.shake)
    );

  // Display the Health, Score and High Score
  ctx.fillStyle = 'rgba(255,255,255,.2)';
  ctx.fillText('Health: ' + gameState.player.energy, 4, 12);
  ctx.fillText('Score: ' + gameState.score, 4, 28);
  if (gameState.score > gameState.hiScore)
    localStorage.hiScore = gameState.hiScore = gameState.score;
  ctx.fillText('High score: ' + gameState.hiScore, 4, 44);

  // update the player and entities
  gameState.player.update();
  gameState.entities.forEach(entity => entity.update());

  // filter out dead entities
  gameState.entities =
    gameState.entities.filter(entity => {
      if (entity.energy <= 0 && entity.scoreReward) {
        entity.addShrapnels();
      }
      return entity.energy > 0;
    });
};

// kick the gameLoop once the sprites are loaded 
gameState.sprites.src = 'sprites.png';
gameState.sprites.onload = gameLoop;