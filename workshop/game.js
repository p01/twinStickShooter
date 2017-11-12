const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

try {
  localStorage.checkIfLocaleStorageIsAccessible;
} catch (err) {
  // shim localStorage in case it's not accessible, e.g. from file://
  localStorage = {};
}

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

// Keyboard handling to keep a list of the keys down at any frame
onkeydown = e => gameState.keysDown[e.key] = true;
onkeyup = e => delete gameState.keysDown[e.key];

let then = Date.now();
const gameLoop = () => {
  try {

    // Schedule next gameLoop update, clear the canvas, set the globalCompositeOperation
    requestAnimationFrame(gameLoop);
    canvas.width = canvas.height = gameState.size;
    ctx.globalCompositeOperation = 'lighten';

    // Update time
    gameState.currentTime = Math.round(performance.now()) / 1000;

    // Display the Health, Score and High Score
    ctx.fillStyle = 'rgba(200,255,255,.3)';
    ctx.fillText('Health: ' + gameState.player.energy, 28, 28);
    ctx.fillText('Score: ' + gameState.score, 28, 44);
    if (gameState.score > gameState.hiScore)
      localStorage.hiScore = gameState.hiScore = gameState.score;
    ctx.fillText('High score: ' + gameState.hiScore, 28, 60);

    // Display some debug output
    ctx.fillText(gameState.currentTime, 0, 76);
    ctx.fillText(gameState.entities.length + ' entities', 0, 92);
    ctx.fillText('gameState.keysDown: ' + Object.keys(gameState.keysDown), 0, 108);

    // Update the player and entities
    gameState.player.update();
    gameState.entities.forEach(entity => entity.update());

    // Filter out dead entities
    gameState.entities =
      gameState.entities.filter(entity => entity.energy > 0);

  // Catch and show any errors to save precious debugging time during the coding sessions
  } catch (error) {
    ctx.fillStyle = '#f06';
    ctx.globalCompositeOperation = 'xor';
    ctx.fillRect(0, gameState.size, gameState.size, -16);
    ctx.fillText(error, 0, gameState.size - 4);
    // (re)throw the error so it shows in the Developer tool with a stack trace 
    throw error;
  }
};

// Kick the gameLoop once the sprites are loaded 
gameState.sprites.src = 'sprites.png';
gameState.sprites.onload = gameLoop;