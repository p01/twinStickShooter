
/* SESSION #2 in the Bullet update method, where we decrease the energy of a robot

TODO: 9. If the robot runs out of energy, replace it by a new one and increase gameState.score

*/

// dead robot?
if (entity.energy <= 0) {
  gameState.score += entity.scoreReward;
  gameState.entities.push(new Robot());
}
