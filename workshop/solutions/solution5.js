/* SESSION #1 in the Robot update method

TODO: #5 Use a low probability to set this.vx and this.vy to move towards the Player
HINT: Try using one probability to set both vx and vy, then try using one for each
      this.getDistance(...) and Math.sign() are you friends ;)
      Increasing the difficulty by increasing "probability" with the gameState.currentTime or gameState.score
*/

const probablity = .2;
const distanceToPlayer = this.getDistance(gameState.player, 8);
this.vx = (Math.random() < probablity) ? Math.sign(distanceToPlayer.x) : 0;
this.vy = (Math.random() < probablity) ? Math.sign(distanceToPlayer.y) : 0;
