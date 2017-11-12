class Player extends BaseEntity {
  constructor() {
    super(
      BaseEntity.sprite.player,
      64,
      gameState.size / 2,
      gameState.size / 2
    );
  }

  update() {
    if (this.energy <= 0)
      return;

    /*
      SESSION #1 in the Player update method

      TODO: 1. Set this.vx and this.vy using gameState.keysDown to move the player with the Arrow keys, or any other keys you prefer
      HINT: gameState.keysDown.j is undefined if 'j' is not pressed, and 1 if it is pressed.
      SOLUTION: solution1.js
    
      TODO: 2. Set this.x and this.y to keep the player in the arena, or wrap around it.
      HINT: The size of the arena is gameState.size
      SOLUTION: solution2.js

      TODO: 3. Check gameState.keysDown to spawn a new Bullet and set its this.vx and this.vy
      HINT: gameState.keysDown.s is undefined if 's' is not pressed, and 1 if it is pressed.
      SOLUTION: solution3.js
    */

    // move & render
    super.update();
    this.render();
  }
}
