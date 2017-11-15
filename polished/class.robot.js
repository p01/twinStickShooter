class Robot extends BaseEntity {
  constructor() {
    const robotType = Math.floor((Math.random() ** 3) * 4);
    super(
      BaseEntity.sprite.robot + robotType,
      4 ** (robotType + 1),
      gameState.player.x,
      gameState.player.y
    );
    this.scoreReward = 2 ** robotType;

    // start at a safe distance from the player
    const safeDistance = gameState.size / 3;
    while (this.getDistance(gameState.player, safeDistance).isClose) {
      this.x = Math.random() * gameState.size;
      this.y = Math.random() * gameState.size;
    }
  }

  update() {
    const entityIndex = this.baseFrame & 15;
    const entityToChase = gameState.player.energy > 0 ? gameState.player :
      gameState.entities[entityIndex];

    const probabilityToHome = .2 + .3 * Math.min(1, gameState.score / 256);
    const distanceToOtherEntity = this.getDistance(entityToChase, 8);
    this.vx = Math.random() < probabilityToHome ? Math.sign(distanceToOtherEntity.x) : 0;
    this.vy = Math.random() < probabilityToHome ? Math.sign(distanceToOtherEntity.y) : 0;

    if (distanceToOtherEntity.isClose) {
      entityToChase.energy -= this.scoreReward;
      if (gameState.player.energy <= 0) {
        gameState.entities[entityIndex] = new Robot();
        this.addShrapnels();
      }
    }

    if (Math.random() < .01)
      this.addShrapnels();

    // base update
    super.update();
    this.render();
  }
}
