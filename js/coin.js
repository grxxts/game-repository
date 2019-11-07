class Coin {
    constructor(ctx,image, height) {
        this.ctx = ctx;

        this.image = new Image();
        this.image.src = image;
        this.height = height;
        this.posX = 400;
        this.posY = 170;
        // this.hasAcorn = true;
    }

    draw() {
        
        this.ctx.drawImage(this.image, this.posX, this.posY, 50, 50);
        
    }



}