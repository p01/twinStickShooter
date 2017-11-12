class Bullet extends BaseEntity {
  constructor(x, y, vx, vy) {
    super(BaseEntity.sprite.bullet, 1, x, y, vx, vy);
  }

  update() {
    /*
      SESSION #1 in the Bullet update method
      
      TODO: 4. Set this.energy to 0 when the bullet leaves the arena
      HINT: The size of the arena is gameState.size
            If you want the bullets to wrap around, wrap this.x and this.y around and set this.energy to 0 when gameState.currentTime > this.creationTime + whatEverNumberOfSecondsYouWant ;)
      SOLUTION: solution4.js
    */

    /*
      SESSION #2 in the Bullet update method
      
      TODO: 8. Decrease the energy of the robot & bullet when they collide
      HINT: Loop through each gameState.entities to look for the robots
            Unlike the player and bullet, the robots are instanceof Robot and they have a scoreReward property
            Make sure the bullet and robot still have some energy
            The bullets are small, so the sprites must be very close to hit the robots
            The body of the robots is 8x8, the bullets are 2x2
            Pushing the robot using a fraction of the velocity of the bullet looks pretty cool ;)
      SOLUTION: solution8.js
    
      TODO: 9. If the robot runs out of energy, replace it by a new one and increase gameState.score
      SOLUTION: solution9.js
    */


    // move & render
    super.update();
    this.render();
  }
}
