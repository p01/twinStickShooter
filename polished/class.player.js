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
      return this.energy = 0;

    const keys = gameState.keysDown;
    // Check the Arrow keys to set the vx, vy
    this.vx = Boolean(keys.ArrowRight || keys.Right) - Boolean(keys.ArrowLeft || keys.Left);
    this.vy = Boolean(keys.ArrowDown || keys.Down) - Boolean(keys.ArrowUp || keys.Up);

    // move & render
    super.update();
    this.render();

    
    // keep the player in the arena
    this.x = Math.min(gameState.size, Math.max(0, this.x));
    this.y = Math.min(gameState.size, Math.max(0, this.y));
    
    // Fire ?
    // Check the w,a,s,d keys to set the vx, vy of the new bullet
    const bulletVx = Boolean(keys.d) - Boolean(keys.a);
    const bulletVy = Boolean(keys.s) - Boolean(keys.w);
    if (bulletVx || bulletVy) {
      if (Math.random() < .01)
        this.addShrapnels();  
      // Use Math.hypot to get the distance of the vector (bulletVx, bulletVy) and make sure the bullets travel all at the same velocity
      const scale = 4 / Math.hypot(bulletVx, bulletVy);
      gameState.entities.push(new Bullet(
        this.x,
        this.y,
        bulletVx * scale,
        bulletVy * scale
      ));
    }
  }
}
