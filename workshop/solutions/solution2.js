/* SESSION #1 in the Player update method

TODO: 2. Set this.x and this.y to keep the player in the arena, or wrap around it.
HINT: The size of the arena is gameState.size

*/

const max = gameState.size;
if (this.x < 0) this.x = 0;
if (this.y < 0) this.y = 0;
if (this.x > max) this.x = max;
if (this.y > max) this.y = max;

/*

If you want to wrap around, use:

const max = gameState.size;
if (this.x < 0) this.x += max;
if (this.y < 0) this.y += max;
if (this.x > max) this.x -= max;
if (this.y > max) this.y -= max;

*/