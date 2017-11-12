class Bullet extends BaseEntity {
  constructor(x, y, vx, vy) {
    vx += (Math.random() * 2 - 1) * .1;
    vy += (Math.random() * 2 - 1) * .1;
    super(BaseEntity.sprite.bullet, 1, x, y, vx, vy);
  }

  update() {
    super.update();
    this.render();

    if (this.x < 0 || this.y < 0 || this.x > gameState.size || this.y > gameState.size)
      this.energy = 0;

    // Check collision with the robots
    gameState.entities.some(entity => {
      if (this.energy > 0 && entity.scoreReward && entity.energy > 0 && this.getDistance(entity, 4).isClose) {
        this.energy--;
        entity.energy--;
    
        // Could be nice to push the entity using this.vx and this.vy of the bullet
        entity.x += this.vx / 4;
        entity.y += this.vx / 4;
     
        // dead robot?
        if (entity.energy <= 0) {
          gameState.score += entity.scoreReward;
          gameState.entities.push(new Robot());
        }
      }
      return this.energy <= 0;
    });
  }
}
