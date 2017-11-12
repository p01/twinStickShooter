/* SESSION #2 in the Robot update method

TODO: 7. Decrease the energy of the Player if it is too close to the robot.
HINT: The "body" of the sprites are 8x8

*/

// Add the actual size of the sprites to the distance calculation from the TODO: 5
const distanceToPlayer = this.getDistance(gameState.player, 8);


if (distanceToPlayer.isClose) {
  gameState.player.energy--;
}
