class Bullet extends BaseEntity {
  constructor(x, y, vx, vy) {
    vx += (Math.random() * 2 - 1) * .1;
    vy += (Math.random() * 2 - 1) * .1;
    let energy = 1;
    // super bullet
    if (Math.random() < .1) {
      vx /= 4;
      vy /= 4;
      energy = 32;
    }

    super(BaseEntity.sprite.bullet, energy, x, y, vx, vy);
  }

  update() {
    if (this.x < 0 || this.y < 0 || this.x > gameState.size || this.y > gameState.size)
      this.energy = 0;

    // Check collision with the robots
    gameState.entities.some(entity => {
      if (this.energy > 0 && entity.scoreReward && entity.energy > 0 && this.getDistance(entity, 4).isClose) {
        const minEnergy = Math.min(this.energy, entity.energy);
        this.energy -= minEnergy;
        entity.render();
        entity.energy -= minEnergy;

        // Could be nice to push the entity using this.vx and this.vy of the bullet
        entity.x += this.vx / 4;
        entity.y += this.vy / 4;

        // dead robot?
        if (entity.energy <= 0) {
          gameState.score += entity.scoreReward;
          gameState.entities.push(new Robot());
          this.addShrapnels();
        }
      }
      return this.energy <= 0;
    });

    super.update();
    this.render();
  }
}
