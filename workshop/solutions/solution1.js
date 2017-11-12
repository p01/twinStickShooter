/* SESSION #1 in the Player update method

TODO: 1. Set this.vx and this.vy using gameState.keysDown to move the player with the Arrow keys, or any other keys you prefer
HINT: gameState.keysDown.j is undefined if 'j' is not pressed, and 1 if it is pressed.

*/

// The arrow keys have a different identifier in different browsers so we use both versions here
this.vx  = gameState.keysDown.ArrowRight || gameState.keysDown.Right || 0;
this.vx -= gameState.keysDown.ArrowLeft || gameState.keysDown.Left || 0;
this.vy  = gameState.keysDown.ArrowDown || gameState.keysDown.Down || 0;
this.vy -= gameState.keysDown.ArrowUp || gameState.keysDown.Up || 0;
