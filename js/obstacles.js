class Obstacle {
    constructor(ctx, width, height, gameWidth, gameHeight) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
  
      this.posX = gameWidth;
      this.posY = gameHeight * 0.98 - this.height;
  
      this.vx = 10;
    }
  
    draw() {
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }