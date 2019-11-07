class Winner {
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
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
   

}