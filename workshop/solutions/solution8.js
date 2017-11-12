/* SESSION #2 in the Bullet update metod

TODO: 8. Decrease the energy of the robot & bullet when they collide
HINT: Loop through each gameState.entities to look for the robots
      Unlike the player and bullet, the robots are instanceof Robot and they have a scoreReward property
      Make sure the bullet and robot still has some energy
      The bullets are small, so the sprites must be very close to hit the robots
      Pushing the robot using the velocity of the bullet looks pretty cool ;)

*/

// Use "some" to loop through the entities and stop when the bullet has no more energy
gameState.entities.some(entity => {
  if (this.energy > 0 && entity.scoreReward && entity.energy > 0 && this.getDistance(entity, 4).isClose) {
    this.energy--;
    entity.energy--;

    // Could be nice to push the entity using this.vx and this.vy of the bullet
    entity.x += this.vx / 4;
    entity.y += this.vx / 4;
 
  }
  return this.energy <= 0;
});
