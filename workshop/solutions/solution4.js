/* SESSION #1 in the Bullet update method

TODO: 4. Set this.energy to 0 when the bullet leaves the arena
HINT: The size of the arena is gameState.size

*/

const max = gameState.size;
if (this.x < 0 || this.y < 0 || this.x > max || this.y > max)
  this.energy = 0;
