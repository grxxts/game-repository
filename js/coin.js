class Coin {
    constructor(ctx,image, height, posX, posY) {
        this.ctx = ctx;

        this.image = new Image();
        this.image.src = image;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        // this.hasAcorn = true;
    }

    draw() {
        
        this.ctx.drawImage(this.image, this.posX, this.posY, 50, 50);
        
    }



}