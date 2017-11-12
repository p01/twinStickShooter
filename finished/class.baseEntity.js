class BaseEntity {
  constructor(sprite, energy, x, y, vx = 0, vy = 0) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.sprite = sprite;
    this.energy = energy;
    this.baseFrame = Math.random() * 4;
    this.creationTime = gameState.currentTime;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  render() {
    const frame = (gameState.currentTime * 8 + this.baseFrame) & 3;
    let x, y;
    ctx.drawImage(
      gameState.sprites,
      this.sprite * 16, frame * 16, 16, 16,
      Math.round(this.x - 16 / 2), Math.round(this.y - 16 / 2), 16, 16);
  }

  getDistance(other, distance) {
    const x = other.x - this.x;
    const y = other.y - this.y;
    const isClose = Math.hypot(x, y) < distance;
    return { x, y, isClose };
  }
};

// Types of entities
BaseEntity.sprite = {
  player: 0,
  bullet: 1,
  robot: 2
};
