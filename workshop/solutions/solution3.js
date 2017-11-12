/* SESSION #1 in the Player update method

TODO: 3. Check gameState.keysDown to spawn a new Bullet and set its this.vx and this.vy
HINT: gameState.keysDown.s is undefined if 's' is not pressed, and 1 if it is pressed.
      What about adding some randomness to the the velocity of the new Bullet ?
*/

let bvx, bvy;
bvx  = gameState.keysDown.d || 0;
bvx -= gameState.keysDown.a || 0;
bvy  = gameState.keysDown.s || 0;
bvy -= gameState.keysDown.w || 0;

if (bvx || bvy) {
  const speed = 4; // We want the bullets to zip around the arena
  gameState.entities.push(
    new Bullet(this.x, this.y, bvx * speed, bvy * speed)
  );
}
