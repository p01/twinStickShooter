class Robot extends BaseEntity {
  constructor() {
    const robotType = Math.floor((Math.random() ** 3) * 4);
    const max = gameState.size;
    const x = Math.random() * max;
    const y = Math.random() * max;
    super(
      BaseEntity.sprite.robot + robotType,
      4 ** (robotType + 1),
      x,
      y
    );
    this.scoreReward = 2 ** robotType;

    /*
      SESSION #2 in the Robot constructor

      TODO: 6 spawn Robot at a safe distance from the player
      HINT: this.getDistance(...) to figure if a random position is too close
            Set your "safe distance" based on gameState.size
            Remember the player starts in the center i.e. gameState.size / 2
      SOLUTION: solution6.js
    */
  }

  update() {
    /*
      SESSION #1 in the Robot update method

      TODO: 5 Use a low probability to set this.vx and this.vy to move towards the player
      HINT: The player is in gameState.player
            Try using one probability to set this.vx and this.vy, then try using one for each
            this.getDistance(anEntity, someDistance) and Math.sign() are you friends ;)
            Increase the probability with the currentTime or the score to increase the speed of the robots, and the difficulty of the game
      SOLUTION: solution5.js
    */

    /*
      SESSION #2 in the Robot update method

      TODO: 7. Decrease the energy of the Player if it is too close to the robot.
      HINT: The "body" of the sprites are 8x8
      SOLUTION: solution7.js
    */

    // move & render
    super.update();
    this.render();
  }
}
