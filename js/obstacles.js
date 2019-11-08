class Obstacle {
    constructor(ctx, width, height, gameWidth, gameHeight, posX, posY) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    


        this.posX = posX;
        this.posY = posY;

    }

    draw() {
        this.ctx.fillStyle = "brown"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
   

}