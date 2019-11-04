class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = "img/6-vector-game-backgrounds-8003_imgs_8003_1.png";

        this.posX = 0;
        this.posY = 0;

    }

    draw(){
      
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);


    }
    
}