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
    const i = this.scoreReward ? (1 - Math.min(1, gameState.currentTime - this.creationTime)) ** 2 : 0;
    const s = 16 + gameState.size * i;
    ctx.globalAlpha = 1 - i;
    ctx.drawImage(
      gameState.sprites,
      this.sprite * 16, frame * 16, 16, 16,
      Math.round(this.x - s / 2), Math.round(this.y - s / 2), s, s);
  }

  addShrapnels() {
    if (Math.random() < .1) {
      for (let i = 16; i--;) {
        const an = Math.random() * Math.PI * 2;
        gameState.entities.push(new Bullet(this.x, this.y, Math.cos(an) * 4, Math.sin(an) * 4));
      }
    }
  }

  getDistance(other, distance) {
    const x = other.x - this.x;
    const y = other.y - this.y;
    const isClose = Math.hypot(x, y) < distance;
    if (isClose)
      gameState.shake += .05;
    
    return { x, y, isClose };
  }
};

// Types of entities
BaseEntity.sprite = {
  player: 0,
  bullet: 1,
  robot: 2
};
