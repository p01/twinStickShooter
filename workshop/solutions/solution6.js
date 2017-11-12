/* SESSION #2 in the Robot constructor

TODO: #6 spawn Robot at a safe distance from the player
HINT: this.getDistance(..., ...) to figure if a random position is too close
      Set your "safe distance" based on gameState.size
      Remember the player starts in the center i.e. gameState.size / 2
*/

const safeDistance = gameState.size / 4;
while (this.getDistance(gameState.player, safeDistance).isClose) {
  this.x = Math.random() * max;
  this.y = Math.random() * max;
}
